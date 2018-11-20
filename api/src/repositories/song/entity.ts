export default class Song{
    id: string;
    title: string;
    artist: string;
    comment: string;
    getId(): string
    {
        return this.id;
    }
    setId(id: string): void
    {
        this.id = id;
    }
    getTitle(): string
    {
        return this.title;
    }
    setTitle(title: string): void
    {
        this.title = title;
    }
    getArtist(): string
    {
        return this.artist;
    }
    setArtist(artist: string): void
    {
        this.artist = artist;
    }
    getComment(): string
    {
        return this.comment;
    }
    setComment(comment: string): void
    {
        this.comment = comment;
    }
}