import { DynamoDB } from "aws-sdk";

export const schema: DynamoDB.DocumentClient.PutItemInput = {
  Item: {},
  TableName: "acoustic-blindtest_songs"
};
