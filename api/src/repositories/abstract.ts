export class AbstractRepository{
    db: any;
    constructor(connection: any){
        this.db = connection;
    }
}