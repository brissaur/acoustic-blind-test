import { IEntity } from "./entitytInterface";
import { AttributeMap } from "aws-sdk/clients/dynamodb";

export interface ExtractData {}

export interface IHydrator<E = ExtractData> {
  hydrate(data: AttributeMap, entity: IEntity): void;
  extract(entity: IEntity): E;
}
