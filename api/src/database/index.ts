import awsSdk, { DynamoDB } from "aws-sdk";
import { AWS_REGION } from "../../build.properties";

awsSdk.config.update({ region: AWS_REGION });

export default class DataSource {
  connection: DynamoDB.DocumentClient;
  constructor() {
    this.connection = new DynamoDB.DocumentClient();
  }
  getConnection(): DynamoDB.DocumentClient {
    return this.connection;
  }
}
