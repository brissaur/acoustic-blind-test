import { IEntity } from "../entitytInterface";
import Team from "../team/entity";

export default class PlayedSong implements IEntity {
  songId!: string;
  team!: Team;
  getSongId(): string {
    return this.songId;
  }
  setSongId(id: string): void {
    this.songId = id;
  }
  getTeam(): Team {
    return this.team;
  }
  setTeam(team: Team): void {
    this.team = team;
  }
}
