import {IHydrator} from "../hydratorInterface";
import Song from "./entity";

export default class SongHydrator implements IHydrator{
    hydrate(data: any, song: Song): void
    {
        song.setId(data.id['N']);
        song.setArtist(data.artist['S']);
        song.setComment(data.comment['S']);
        song.setTitle(data.title['S']);
    }
    extract(song: Song): any
    {
        // @todo
        return {};
    }
}