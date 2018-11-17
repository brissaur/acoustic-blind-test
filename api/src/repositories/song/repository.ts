import {AbstractRepository} from "../abstract";
import {schema} from './batchGetItems.schema';

export default class SongRepository extends AbstractRepository{
    getAllSongs(){
        this.db.batchGetItem(schema, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log(data);           // successful response
        });
    }
};