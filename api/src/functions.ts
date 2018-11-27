import { SongRepositoryFactory } from "./repositories/song/factory";

export function getSongs(event: any, context: any, callback: any): void {
  // @todo : To be done
  const songRepository = SongRepositoryFactory();
  callback(null, songRepository.getAllSongs());
}
