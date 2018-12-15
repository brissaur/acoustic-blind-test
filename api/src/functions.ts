import { songRepositoryFactory } from "./repositories/song/factory";

export async function getSongs(event: any, context: any, callback: Function) {
  const songRepository = songRepositoryFactory();
  return {
    statusCode: "200",
    body: JSON.stringify(await songRepository.getAllSongs())
  };
}
