import {AbstractRepository} from "../abstract";
import {schema} from './scan.schema';
import Song from "./entity";

export default class SongRepository extends AbstractRepository{
    async getAllSongs(): Promise<Song[]>
    {
        try{
            const result = await this.db.scan(schema).promise();
            return result.Items.map((data: any) => {
                const song = new Song();
                this.hydrator.hydrate(data, song);
                return song;
            });
        }catch(error){
            // @todo: Use a truly logger
            console.log('error',error);
            throw error;
        }
    }
};