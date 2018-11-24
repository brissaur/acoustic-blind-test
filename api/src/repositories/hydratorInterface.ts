import {IEntity} from "./entitytInterface";

export interface IHydrator{
    hydrate(data: {}, entity: IEntity): void;
    extract(entity: IEntity): any;
}