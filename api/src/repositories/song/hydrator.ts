import { ExtractData, HydrateData, IHydrator } from "../hydratorInterface";
import Song from "./entity";

export interface ExtractSongData extends ExtractData {
  id: undefined | string;
  artist: string;
  title: string;
  comment: undefined | string;
}

export interface HydrateSongData extends HydrateData {
  id: string;
  artist: string;
  title: string;
  comment: undefined | string;
}

export default class SongHydrator
  implements IHydrator<ExtractSongData, HydrateSongData> {
  hydrate(data: HydrateSongData, song: Song): void {
    song.setId(data.id);
    song.setArtist(data.artist);
    song.setComment(data.comment);
    song.setTitle(data.title);
  }
  extract(song: Song): ExtractSongData {
    return {
      id: song.getId(),
      artist: song.getArtist(),
      comment: song.getComment(),
      title: song.getTitle()
    };
  }
}
