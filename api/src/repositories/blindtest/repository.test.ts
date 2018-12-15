import BlindtestRepository from "./repository";
import BlindtestHydrator from "./hydrator";
import Blindtest from "./entity";
import PlayedSong from "../playedsong/entity";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

test("createBlindtest method works", async () => {
  const getConnection = jest.fn(() => {
    const service = new DocumentClient();
    service.put = jest.fn(() => {
      return {
        promise: () => {
          return Promise.resolve({
            Items: [
              {
                id: "00000000-0000-0000-0000-000000000001",
                date: "2018-12-15T15:33:00.000Z",
                title: "title",
                teams: ["teamA", "teamB"],
                playedSongs: [
                  {
                    songId: "00000000-0000-0000-0000-000000000011",
                    team: "teamA"
                  }
                ]
              }
            ]
          });
        }
      };
    });
    return service;
  });
  const repo = new BlindtestRepository(
    getConnection(),
    new BlindtestHydrator()
  );
  const blindtest = new Blindtest();
  blindtest.setId("00000000-0000-0000-0000-000000000001");
  blindtest.setTitle("title");
  blindtest.setDate(new Date("2018-12-15T16:33:00"));
  blindtest.setTeams(["teamA", "teamB"]);
  const playedSong = new PlayedSong();
  playedSong.setTeam("teamA");
  playedSong.setSongId("00000000-0000-0000-0000-000000000011");
  blindtest.setPlayedSongs([playedSong]);
  await repo.createBlindtest(blindtest);
});
