import Blindtest from "./entity";
import PlayedSong from "../playedsong/entity";
import BlindtestHydrator from "./hydrator";

test("extract method", () => {
  const hydrator = new BlindtestHydrator();
  const blindtest = new Blindtest();

  blindtest.setId("00000000-0000-0000-0000-000000000001");
  blindtest.setDate(new Date("2018-12-05 21:55:00"));
  blindtest.setTitle("title");
  blindtest.setTeams(["teamA", "teamB"]);

  const playedSong1 = new PlayedSong();
  playedSong1.setSongId("00000000-0000-0000-0000-000000000001");
  playedSong1.setTeam("teamA");
  const playedSong2 = new PlayedSong();
  playedSong2.setSongId("00000000-0000-0000-0000-000000000002");
  playedSong2.setTeam("teamB");
  blindtest.setPlayedSongs([playedSong1, playedSong2]);

  const data = hydrator.extract(blindtest);

  expect(data).toEqual({
    id: "00000000-0000-0000-0000-000000000001",
    date: "2018-12-05T20:55:00.000Z",
    title: "title",
    teams: ["teamA", "teamB"],
    playedSongs: [
      {
        songId: "00000000-0000-0000-0000-000000000001",
        team: "teamA"
      },
      {
        songId: "00000000-0000-0000-0000-000000000002",
        team: "teamB"
      }
    ]
  });
});
