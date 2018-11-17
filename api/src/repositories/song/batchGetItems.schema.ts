export const schema = {
    "RequestItems": {
        "songs" : {
            "ConsistentRead": boolean,
            "ExpressionAttributeNames": {
                "string" : "string"
            },
            "Keys": [
                {
                    "string" : {
                        "B": blob,
                        "BOOL": boolean,
                        "BS": [ blob ],
                        "L": [
                            "AttributeValue"
                        ],
                        "M": {
                            "string" : "AttributeValue"
                        },
                        "N": "string",
                        "NS": [ "string" ],
                        "NULL": boolean,
                        "S": "string",
                        "SS": [ "string" ]
                    }
                }
            ],
            "ProjectionExpression": "string"
        }
    },
    "ReturnConsumedCapacity": "string"
};