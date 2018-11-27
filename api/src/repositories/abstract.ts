import { IHydrator } from "./hydratorInterface";
import dynamodb from "aws-sdk/clients/dynamodb";

export class AbstractRepository {
  db: dynamodb;
  hydrator: IHydrator;
  constructor(connection: dynamodb, hydrator: IHydrator) {
    this.db = connection;
    this.hydrator = hydrator;
  }
}
