export class AbstractRepository{
    db: any;
    constructor(connection){
        this.db = connection;
    }
}