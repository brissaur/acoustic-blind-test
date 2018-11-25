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

export const Context = React.createContext(INITIAL_CONTEXT);

export interface IContext extends IState {
  getLatestContext(): IContext;
  addResult(result: IResult): Promise<void>;
  setSongs(songs: ISong[]): Promise<void>;
  setTeams(teams: ITeam[]): Promise<void>;
  setName(name: string): Promise<void>;
  skipSong(songId: ISongId): Promise<void>;
  replaySkipped(): Promise<void>;
}
type IProps = {};
interface IState {
  songs: ISong[];
  results: IResult[];
  teams: ITeam[];
  name: string;
  skipedSongs: ISongId[];
  didReplaySkipped: boolean;
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
      didReplaySkipped: false
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
    replaySkipped: this.replaySkipped
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

  render() {
    global.console.log("CONTEXT", this.state);
    return (
      <Context.Provider value={this.computeContext()}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
