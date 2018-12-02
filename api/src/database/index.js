"use strict";
exports.__esModule = true;
var dynamodb_1 = require("aws-sdk/clients/dynamodb");
var aws_sdk_1 = require("aws-sdk");
var build_properties_1 = require("../../build.properties");
aws_sdk_1["default"].config.update({ region: build_properties_1.AWS_REGION });
var DataSource = /** @class */ (function () {
    function DataSource() {
        this.connection = new dynamodb_1["default"]();
    }
    DataSource.prototype.getConnection = function () {
        return this.connection;
    };
    return DataSource;
}());
exports["default"] = DataSource;
