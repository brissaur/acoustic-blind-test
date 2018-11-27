import { AbstractRepository } from "../abstract";
import { schema } from "./scan.schema";
import Song from "./entity";

export default class SongRepository extends AbstractRepository {
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
      console.log("error", error);
      throw error;
    }
  }
}
