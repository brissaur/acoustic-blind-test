import dynamodb, { DocumentClient } from "aws-sdk/clients/dynamodb";
import awsSdk from "aws-sdk";
import { AWS_REGION } from "../../build.properties";

awsSdk.config.update({ region: AWS_REGION });

export default class DataSource {
  connection: DocumentClient;
  constructor() {
    this.connection = new DocumentClient();
  }
  getConnection(): DocumentClient {
    return this.connection;
  }
}
