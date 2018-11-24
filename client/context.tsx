import * as React from "react";

type ISongId = number;
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
  addResult(result: IResult): void;
  setSongs(songs: ISong[]): void;
  setTeams(teams: ITeam[]): void;
  setName(name: string): void;
  skipSong(songId: ISongId): void;
}
type IProps = {};
interface IState {
  songs: ISong[];
  results: IResult[];
  teams: ITeam[];
  name: string;
  skipedSongs: ISongId[];
}
export class ContextWrapper extends React.Component<IProps, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      songs: [],
      results: [],
      teams: [],
      name: "",
      skipedSongs: []
    };
  }

  computeContext = (): IContext => ({
    ...this.state,
    addResult: this.addResult,
    setSongs: this.setSongs,
    setTeams: this.setTeams,
    setName: this.setName,
    skipSong: this.skipSong
  });
  setTeams = (teams: ITeam[]) => this.setState({ teams });
  setSongs = (songs: ISong[]) => this.setState({ songs });
  setName = (name: string) => this.setState({ name });
  addResult = (result: IResult) =>
    this.setState({ results: this.state.results.concat([result]) });
  skipSong = (songId: ISongId) =>
    this.setState({ skipedSongs: this.state.skipedSongs.concat([songId]) });

  render() {
    global.console.log("CONTEXT", this.state);
    return (
      <Context.Provider value={this.computeContext()}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
