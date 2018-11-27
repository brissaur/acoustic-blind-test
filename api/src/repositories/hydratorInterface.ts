import { IEntity } from "./entitytInterface";
import { AttributeMap } from "aws-sdk/clients/dynamodb";

export interface IHydrator {
  hydrate(data: AttributeMap, entity: IEntity): void;
  extract(entity: IEntity): AttributeMap;
}
