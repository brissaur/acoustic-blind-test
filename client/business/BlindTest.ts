import { IContext, ISong, ITeam } from "./../context";
import { getNextSong } from "./Song";
import { fetchApi, PATH } from "../technical/network/fetch";

export function startBlindTest({
  context,
  teams,
  navigation
}: {
  context: IContext;
  teams: ITeam[];
  navigation: any; // @todo
}) {
  context.setTeams(teams);

  const nextSongId = getNextSong(context);
  navigation.push("SongBeingPlayed", { id: nextSongId });
}

export function endBlindTest() {
  //
}

interface IBlindTestResultDetails {
  [team: string]: ISong[];
}
export function computeDetails(context: IContext) {
  const emptyTeamHashMap = context.teams.reduce<IBlindTestResultDetails>(
    (acc, team) => ({ ...acc, [team]: [] }),
    { null: [] }
  );

  return context.results.reduce(
    (acc, result) => ({
      ...acc,
      [result.team]: [
        ...acc[result.team],
        context.songs.find(song => song.id === result.songId)
      ]
    }),
    emptyTeamHashMap
  );
}

export function computeWinner(
  details: IBlindTestResultDetails
): { team: ITeam | null; score: number } {
  return Object.entries(details).reduce<{ team: ITeam | null; score: number }>(
    (acc, [team, songs]) =>
      team && songs.length > acc.score ? { team, score: songs.length } : acc,
    { team: null, score: 0 }
  );
}

export const finishBlindTest = async ({
  context,
  navigation
}: {
  context: IContext;
  navigation: any;
}) => {
  const blindTest = context.getBlindTestObject();

  await context.setSaveBlindTestStatus(true, false);

  fetchApi({
    path: PATH.blindtests,
    method: "POST",
    body: JSON.stringify(blindTest)
  }).then(
    () => context.setSaveBlindTestStatus(false, false),
    e => {
      global.console.error(e);
      context.setSaveBlindTestStatus(false, true);
    }
  );

  navigation.push("BlindTestFinished");
};
