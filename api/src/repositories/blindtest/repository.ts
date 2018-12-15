import { AbstractRepository } from "../abstract";
import { schema as blindtestSchema } from "./put.schema";
import Blindtest from "./entity";
import { v4 as uuid } from "uuid";
import { ExtractBlindtestData } from "./hydrator";

export default class BlindtestRepository extends AbstractRepository<
  ExtractBlindtestData
> {
  async createBlindtest(blindtest: Blindtest): Promise<string> {
    try {
      const data = this.hydrator.extract(blindtest);
      data.id = data.id || uuid();
      const schema = blindtestSchema;
      schema.Item = data;
      await this.db.put(schema).promise();
      return data.id;
    } catch (error) {
      // @todo: Use a truly logger
      // tslint:disable-next-line
      console.log("error", error);
      throw error;
    }
  }
}
