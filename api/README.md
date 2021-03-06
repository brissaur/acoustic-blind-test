# Tools

- aws-sdk

# How to use it in dev mode

We don't have

- https://medium.com/a-man-with-no-server/running-aws-lambda-and-api-gateway-locally-serverless-offline-3c64b3e54772

# AWS

## CLI

Once the aws-cli installed, you can run it by using this command

~/.local/bin/aws

If you have multiple AWS account, you'll need to configure "multiple profiles", as of following: Switch AWS profile : https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html 

Then, make sure you export the profile you need:
export AWS_PROFILE=acoustic-blindtest

Interesting files:
~/.aws/config
~/.aws/credentials


## Lambda

- To package the code, ready to deploy, run : yarn package-lambda
- To deploy your package on AWS, run: yarn publish-lambda

## DynamoDB request / response

- https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html
- https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_AttributeValue.html

### Blindtest Item

JSON sample to be used from the AWS Web UI
{
  "id": 1,
  "date": "2018-12-05 20:53:00",
  "title": "Blindtest de test",
  "teams": ["teamA", "teamB"],
  "playedSongs": [{
    "songId": 1,
    "team": "teamA"
  }]
}

### Song Item

## API Gateway

API key header : "x-api-key"

GET /songs
https://e8j6pjc91j.execute-api.eu-west-3.amazonaws.com/production/songs

POST /blindtests
https://e8j6pjc91j.execute-api.eu-west-3.amazonaws.com/production/blindtests

POST /songs
https://e8j6pjc91j.execute-api.eu-west-3.amazonaws.com/production/songs