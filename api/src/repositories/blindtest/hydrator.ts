import { ExtractData, HydrateData, IHydrator } from "../hydratorInterface";
import { default as PlayedSongHydrator } from "../playedsong/hydrator";
import Blindtest from "./entity";

export interface ExtractBlindtestData extends ExtractData {
  id: undefined | string;
  date: string;
  title: string;
  teams: string[];
  playedSongs: object[];
}

export default class BlindtestHydrator
  implements IHydrator<ExtractBlindtestData> {
  playedSongHydrator: PlayedSongHydrator;
  constructor() {
    this.playedSongHydrator = new PlayedSongHydrator();
  }
  hydrate(data: HydrateData, blindtest: Blindtest): void {
    // @todo
  }
  extract(blindtest: Blindtest) {
    return {
      id: blindtest.getId(),
      date: blindtest.getDate().toISOString(),
      title: blindtest.getTitle(),
      teams: blindtest.getTeams().map(team => `${team}`),
      playedSongs: blindtest.getPlayedSongs().map(song => {
        return this.playedSongHydrator.extract(song);
      })
    };
  }
}
