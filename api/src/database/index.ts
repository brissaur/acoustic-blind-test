import DynamoDb = require("aws-sdk/clients/dynamodb");

export default class DataSource{
    connection: any;
    constructor(){
        this.connection = DynamoDb.DocumentClient;
    }
    getConnection(){
        return this.connection;
    }
}
