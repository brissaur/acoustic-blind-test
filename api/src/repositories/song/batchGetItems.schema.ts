export const schema = {
    "RequestItems": {
        "acoustic-blindtest_songs" : {
            "ConsistentRead": false,
            "Keys": [
                {
                    "id" : {
                        "N": "1"
                    }
                }
            ],
        }
    },
    "ReturnConsumedCapacity": "NONE"
};