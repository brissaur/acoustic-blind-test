import * as React from "react";
import { ISong } from "../../context";
import { fetchApi, PATH } from "../../technical/network/fetch";

interface IProps {
  setSongs(songs: ISong[]): void;
}
export class AppBootstrapper extends React.Component<IProps> {
  async componentDidMount() {
    const songs = await fetchApi({ path: PATH.songs });
    this.props.setSongs(songs.length > 0 ? songs : []);
  }
  render() {
    return this.props.children;
  }
}
