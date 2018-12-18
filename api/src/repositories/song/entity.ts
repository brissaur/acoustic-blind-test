import { IEntity } from "../entitytInterface";

export default class Song implements IEntity {
  id!: string;
  title!: string;
  artist?: string;
  comment?: string;
  getId(): string {
    return this.id;
  }
  setId(id: string): void {
    this.id = id;
  }
  getTitle(): string {
    return this.title;
  }
  setTitle(title: string): void {
    this.title = title;
  }
  getArtist(): string | undefined {
    return this.artist;
  }
  setArtist(artist: string | undefined): void {
    this.artist = artist;
  }
  getComment(): string | undefined {
    return this.comment;
  }
  setComment(comment: string | undefined): void {
    this.comment = comment;
  }
}
