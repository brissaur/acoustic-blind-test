import { ExtractData, IHydrator } from "../hydratorInterface";
import PlayedSong from "./entity";
import { AttributeMap } from "aws-sdk/clients/dynamodb";
import Team from "../team/entity";

interface ExtractPlayedSongData extends ExtractData {
  songId: string;
  team: Team;
}

export default class PlayedSongHydrator implements IHydrator {
  hydrate(data: AttributeMap, playedSong: PlayedSong): void {
    // @todo
  }
  extract(playedSong: PlayedSong): ExtractPlayedSongData {
    return {
      songId: playedSong.getSongId(),
      team: playedSong.getTeam()
    };
  }
}
