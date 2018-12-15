import { songRepositoryFactory } from "./repositories/song/factory";
import { blindtestRepositoryFactory } from "./repositories/blindtest/factory";
import Blindtest from "./repositories/blindtest/entity";
import PlayedSong from "./repositories/playedsong/entity";
import Team from "./repositories/team/entity";

export async function getSongs(event: any, context: any, callback: Function) {
  const songRepository = songRepositoryFactory();
  return {
    statusCode: "200",
    body: JSON.stringify(await songRepository.getAllSongs())
  };
}

export async function postBlindtest(
  event: any,
  context: any,
  callback: Function
) {
  const blindtestRepository = blindtestRepositoryFactory();
  try {
    const blindtest = new Blindtest();
    blindtest.setTitle(event.title);
    blindtest.setDate(new Date(event.date));
    blindtest.setTeams(event.teams);
    const playedSongs = event.playedSongs.map((ps: PlayedSong) => {
      const playedSong = new PlayedSong();
      playedSong.setTeam(ps.team);
      playedSong.setSongId(ps.songId);
      return playedSong;
    });
    blindtest.setPlayedSongs(playedSongs);
    console.log(blindtest);
    return {
      statusCode: "200",
      body: JSON.stringify(await blindtestRepository.createBlindtest(blindtest))
    };
  } catch (e) {
    // @todo: Use a truly logger
    // tslint:disable-next-line
    console.log(e);
    throw e;
  }
}
