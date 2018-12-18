import * as React from "react";

export type ISongId = number;
export interface ISong {
  id: ISongId;
  title: string;
  artist: string;
  comment?: string;
}
export interface IResult {
  songId: ISongId;
  team: ITeam | null;
}
export type ITeam = string;

const INITIAL_CONTEXT = {};

interface BlindTestObject {
  playedSongs: IResult[];
  teams: ITeam[];
  title: string;
  date: string;
}

export const Context = React.createContext(INITIAL_CONTEXT);

export interface IContext extends IState {
  getLatestContext(): IContext;
  addResult(result: IResult): Promise<void>;
  setSongs(songs: ISong[]): Promise<void>;
  setTeams(teams: ITeam[]): Promise<void>;
  setName(name: string): Promise<void>;
  skipSong(songId: ISongId): Promise<void>;
  replaySkipped(): Promise<void>;
  setSaveBlindTestStatus(isLoading: boolean, hasError: boolean): Promise<void>;
  getBlindTestObject(): BlindTestObject;
}
type IProps = {};
interface IState {
  songs: ISong[];
  results: IResult[];
  teams: ITeam[];
  name: string;
  skipedSongs: ISongId[];
  didReplaySkipped: boolean;
  isSavingBlindTest: boolean;
  hasBlindTestError: boolean;
}
export class ContextWrapper extends React.Component<IProps, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      songs: [],
      results: [],
      teams: [],
      name: "",
      skipedSongs: [],
      didReplaySkipped: false,
      isSavingBlindTest: false,
      hasBlindTestError: false
    };
  }

  computeContext = (): IContext => ({
    ...this.state,
    getLatestContext: this.computeContext,
    addResult: this.addResult,
    setSongs: this.setSongs,
    setTeams: this.setTeams,
    setName: this.setName,
    skipSong: this.skipSong,
    replaySkipped: this.replaySkipped,
    getBlindTestObject: this.getBlindTestObject,
    setSaveBlindTestStatus: this.setSaveBlindTestStatus
  });

  setTeams = (teams: ITeam[]) =>
    new Promise(resolve => this.setState({ teams }, resolve));

  setSongs = (songs: ISong[]) =>
    new Promise(resolve => this.setState({ songs }, resolve));
  setName = (name: string) =>
    new Promise(resolve => this.setState({ name }, resolve));
  addResult = (result: IResult) =>
    new Promise(resolve =>
      this.setState({ results: this.state.results.concat([result]) }, resolve)
    );

  skipSong = (songId: ISongId) =>
    new Promise(resolve =>
      this.setState(
        { skipedSongs: this.state.skipedSongs.concat([songId]) },
        resolve
      )
    );

  replaySkipped = () =>
    new Promise(resolve =>
      this.setState({ didReplaySkipped: true, skipedSongs: [] }, resolve)
    );

  getBlindTestObject = (): BlindTestObject => ({
    playedSongs: this.state.results,
    teams: this.state.teams,
    title: this.state.name,
    date: new Date().toISOString()
  });

  setSaveBlindTestStatus = (
    isSavingBlindTest: boolean,
    hasBlindTestError: boolean
  ) =>
    new Promise(resolve =>
      this.setState({ isSavingBlindTest, hasBlindTestError }, resolve)
    );

  render() {
    global.console.log("CONTEXT", this.state);
    return (
      <Context.Provider value={this.computeContext()}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
