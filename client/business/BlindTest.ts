import { ITeam } from "../context";

export function startBlindTest({
  setTeams,
  teams,
  navigation
}: {
  setTeams(teams: ITeam[]): void;
  teams: ITeam[];
  navigation: any;
}) {
  setTeams(teams);
  navigation.push("SongBeingPlayed", { id: 7 }); // todo: ID
}

export function endBlindTest() {
  //
}
