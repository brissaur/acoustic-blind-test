import DynamoDb = require("aws-sdk/clients/dynamodb");
import AWS = require("aws-sdk");

AWS.config.update({region: 'eu-west-3'});

export default class DataSource{
    connection: any;
    constructor(){
        this.connection = new DynamoDb();
    }
    getConnection(){
        return this.connection;
    }
}
