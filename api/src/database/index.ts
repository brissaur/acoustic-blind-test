import dynamodb from "aws-sdk/clients/dynamodb";
import awsSdk from "aws-sdk";
import { AWS_REGION } from "../../build.properties";

// Paris
awsSdk.config.update({ region: AWS_REGION });

export default class DataSource {
  connection: awsSdk.Service;
  constructor() {
    this.connection = new dynamodb();
  }
  getConnection() {
    return this.connection;
  }
}
