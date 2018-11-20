import {AbstractRepository} from "../abstract";
import {schema} from './scan.schema';

export default class SongRepository extends AbstractRepository{
    async getAllSongs(){
        console.log('get all songs');
        // const callback = (err) => {
        //     if(err){
        //         console.log(err, err.stack);
        //         throw new Error('An error occured with getAllSongs. See logs for details');
        //     }
        //     return data;
        // };
        try{
            console.log('fetching.....');
            const result = await this.db.scan(schema).promise();
            console.log('result', result.Items);
            // console.log('fetched !', result.then((err, data) => {
            //     console.log('data');
            // }));
        }catch(error){
            console.log('error',error);
        }

    }
};