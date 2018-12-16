import { IEntity } from "../entitytInterface";
import Team from "../team/entity";
import PlayedSong from "../playedsong/entity";

export default class Blindtest implements IEntity {
  id!: string;
  date!: Date;
  title!: string;
  teams: Team[] = [];
  playedSongs: PlayedSong[] = [];
  getId(): string {
    return this.id;
  }
  setId(id: string): void {
    this.id = id;
  }
  getDate(): Date {
    return this.date;
  }
  setDate(date: Date): void {
    this.date = date;
  }
  getTitle(): string {
    return this.title;
  }
  setTitle(title: string): void {
    this.title = title;
  }
  getTeams(): Team[] {
    return this.teams;
  }
  setTeams(teams: Team[]): void {
    this.teams = teams;
  }
  getPlayedSongs(): PlayedSong[] {
    return this.playedSongs;
  }
  setPlayedSongs(playedSongs: PlayedSong[]) {
    this.playedSongs = playedSongs;
  }
}
