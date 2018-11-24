import * as React from "react";
import { ISong } from "../../context";

const DEFAULT_SONGS = [{ id: 7, title: "some-title", artist: "some-artist" }];

interface IProps {
  setSongs(songs: ISong[]): void;
}
export class AppBootstrapper extends React.Component<IProps> {
  componentDidMount() {
    this.props.setSongs(DEFAULT_SONGS);
  }
  render() {
    return this.props.children;
  }
}
