import { AbstractRepository } from "../abstract";
import { schema as songScanSchema } from "./scan.schema";
import { schema as songPutSchema } from "./put.schema";
import Song from "./entity";
import { ExtractSongData } from "./hydrator";
import { v4 as uuid } from "uuid";

export default class SongRepository extends AbstractRepository<
  ExtractSongData
> {
  async getAllSongs(): Promise<Song[]> {
    try {
      const result = await this.db.scan(songScanSchema).promise();
      if (result.Items) {
        return result.Items.map(data => {
          const song = new Song();
          this.hydrator.hydrate(data, song);
          return song;
        });
      }
      return [];
    } catch (error) {
      // @todo: Use a truly logger
      // tslint:disable-next-line
      console.log("error", error);
      throw error;
    }
  }
  async createSong(song: Song): Promise<string> {
    try {
      const data = this.hydrator.extract(song);
      data.id = data.id || uuid();
      const schema = songPutSchema;
      schema.Item = data;
      await this.db.put(songPutSchema).promise();
      return data.id;
    } catch (error) {
      // @todo: Use a truly logger
      // tslint:disable-next-line
      console.log("error", error);
      throw error;
    }
  }
}
