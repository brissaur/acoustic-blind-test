import { ExtractData, IHydrator } from "../hydratorInterface";
import Song from "./entity";
import { AttributeMap } from "aws-sdk/clients/dynamodb";

export interface ExtractSongData extends ExtractData {
  //todo
}

export default class SongHydrator implements IHydrator<ExtractSongData> {
  hydrate(data: AttributeMap, song: Song): void {
    song.setId(+data.id["N"]!);
    song.setArtist(data.artist["S"]!);
    song.setComment(data.comment["S"]!);
    song.setTitle(data.title["S"]!);
  }
  extract(song: Song) {
    // @todo
    return {};
  }
}
