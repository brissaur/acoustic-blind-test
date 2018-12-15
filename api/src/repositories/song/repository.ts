import { AbstractRepository } from "../abstract";
import { schema } from "./scan.schema";
import Song from "./entity";
import { ExtractSongData } from "./hydrator";

export default class SongRepository extends AbstractRepository<
  ExtractSongData
> {
  async getAllSongs(): Promise<Song[]> {
    try {
      const result = await this.db.scan(schema).promise();
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
}
