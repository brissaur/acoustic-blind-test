# Tools

- aws-sdk

# How to use it in dev mode

We don't have

- https://medium.com/a-man-with-no-server/running-aws-lambda-and-api-gateway-locally-serverless-offline-3c64b3e54772

# AWS

## CLI

locally: ~/.local/bin/aws

~/.aws/config
~/.aws/credentials

Switch AWS profile : https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html 
export AWS_PROFILE=acoustic-blindtest

## Lambda

### How to build and deploy lambda:
- run bin/build.sh
- run 

## DynamoDB request / response

- https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html

# API Gateway

GET /songs
https://e8j6pjc91j.execute-api.eu-west-3.amazonaws.com/production/songs