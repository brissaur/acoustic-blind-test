import * as React from "react";
import { ISong } from "../../context";
import { fetchApi, PATH } from "../../technical/network/fetch";

const DEFAULT_SONGS: ISong[] = [
  { id: 1, title: "some-title-1", artist: "some-artist-1" },
  { id: 2, title: "some-title-2", artist: "some-artist-2" },
  { id: 3, title: "some-title-3", artist: "some-artist-3" }
  // { id: 4, title: "some-title-4", artist: "some-artist-4" },
  // { id: 5, title: "some-title-5", artist: "some-artist-5" },
  // { id: 6, title: "some-title-6", artist: "some-artist-6" },
  // { id: 7, title: "some-title-7", artist: "some-artist-7" },
  // { id: 8, title: "some-title-8", artist: "some-artist-8" },
  // { id: 9, title: "some-title-9", artist: "some-artist-9" }
];

interface IProps {
  setSongs(songs: ISong[]): void;
}
export class AppBootstrapper extends React.Component<IProps> {
  async componentDidMount() {
    const songs = await fetchApi({
      path: PATH.songs
    });
    this.props.setSongs(songs.length > 0 ? songs : DEFAULT_SONGS);
  }
  render() {
    return this.props.children;
  }
}
