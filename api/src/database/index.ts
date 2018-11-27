import dynamodb from "aws-sdk/clients/dynamodb";
import awsSdk from "aws-sdk";
import { AWS_REGION } from "../../build.properties";

awsSdk.config.update({ region: AWS_REGION });

export default class DataSource {
  connection: dynamodb;
  constructor() {
    this.connection = new dynamodb();
  }
  getConnection(): dynamodb {
    return this.connection;
  }
}
