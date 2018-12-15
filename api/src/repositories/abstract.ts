import { IHydrator } from "./hydratorInterface";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

export class AbstractRepository<E> {
  db: DocumentClient;
  hydrator: IHydrator<E>;
  constructor(connection: DocumentClient, hydrator: IHydrator<E>) {
    this.db = connection;
    this.hydrator = hydrator;
  }
}
