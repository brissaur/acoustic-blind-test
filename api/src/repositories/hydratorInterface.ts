import { IEntity } from "./entitytInterface";

export interface ExtractData {}
export interface HydrateData {}

export interface IHydrator<E = ExtractData, H = HydrateData> {
  hydrate(data: HydrateData, entity: IEntity): void;
  extract(entity: IEntity): E;
}
