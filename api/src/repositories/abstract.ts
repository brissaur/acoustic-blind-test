import {IHydrator} from "./hydratorInterface";

export class AbstractRepository{
    db: any;
    hydrator: IHydrator;
    constructor(connection: any, hydrator: IHydrator){
        this.db = connection;
        this.hydrator = hydrator;
    }
}