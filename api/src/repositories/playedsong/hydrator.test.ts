import PlayedSong from "../playedsong/entity";
import PlayedSongHydrator from "./hydrator";

test("extract method", () => {
  const hydrator = new PlayedSongHydrator();
  const playedSong = new PlayedSong();

  playedSong.setSongId("00000000-0000-0000-0000-000000000001");
  playedSong.setTeam("teamA");

  const data = hydrator.extract(playedSong);

  expect(data).toEqual({
    songId: "00000000-0000-0000-0000-000000000001",
    team: "teamA"
  });
});
