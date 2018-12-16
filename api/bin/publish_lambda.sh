#!/usr/bin/env bash
# run the command from the api/ folder
aws lambda update-function-code --function-name acoustic-blindtest --zip-file fileb://dist/lambda.zip
aws lambda update-function-code --function-name acoustic-blindtest-post-blindtest --zip-file fileb://dist/lambda.zip