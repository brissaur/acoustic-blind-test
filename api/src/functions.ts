import { songRepositoryFactory } from "./repositories/song/factory";
import { blindtestRepositoryFactory } from "./repositories/blindtest/factory";
import Blindtest from "./repositories/blindtest/entity";
import PlayedSong from "./repositories/playedsong/entity";
import Song from "./repositories/song/entity";

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
    const body = JSON.parse(event.body);
    const blindtest = new Blindtest();
    blindtest.setTitle(body.title);
    blindtest.setDate(new Date(body.date));
    blindtest.setTeams(body.teams);
    const playedSongs = body.playedSongs.map((ps: PlayedSong) => {
      const playedSong = new PlayedSong();
      playedSong.setTeam(ps.team);
      playedSong.setSongId(ps.songId);
      return playedSong;
    });
    blindtest.setPlayedSongs(playedSongs);
    return {
      statusCode: "201",
      body: JSON.stringify(await blindtestRepository.createBlindtest(blindtest))
    };
  } catch (e) {
    // @todo: Use a truly logger
    // tslint:disable-next-line
    console.log(e);
    throw e;
  }
}

export async function postSong(event: any, context: any, callback: Function) {
  const songRepository = songRepositoryFactory();
  try {
    const body = JSON.parse(event.body);
    const song = new Song();
    song.setArtist(body.artist);
    song.setTitle(body.title);
    song.setComment(body.comment);
    return {
      statusCode: "201",
      body: JSON.stringify(await songRepository.createSong(song))
    };
  } catch (e) {
    // @todo: Use a truly logger
    // tslint:disable-next-line
    console.log(e);
    throw e;
  }
}
