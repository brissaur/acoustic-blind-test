import { IHydrator } from "./hydratorInterface";
import { DynamoDB } from "aws-sdk";

export class AbstractRepository<E> {
  db: DynamoDB.DocumentClient;
  hydrator: IHydrator<E>;
  constructor(connection: DynamoDB.DocumentClient, hydrator: IHydrator<E>) {
    this.db = connection;
    this.hydrator = hydrator;
  }
}
