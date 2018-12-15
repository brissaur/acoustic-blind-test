import { DocumentClient } from "aws-sdk/clients/dynamodb";

export const schema: DocumentClient.PutItemInput = {
  Item: {},
  TableName: "acoustic-blindtest_blindtests" /* required */
};
