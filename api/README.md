# Tools

- aws-sdk

# Object

## Team (string)

## Song 

{
    id: Number
    title: string,
    artist: string,
    comment: string (long),
}

## BlindTest

{
    date: Date (du jour)
    title: string
    teams: Team[]
    playedSong: PlayedSong[]
}

## PlayedSong

{
    songId: id
    team: string|null
}

# API Contract

## GetSong

Response:
200: [{
    name: string,
    artist: string,
    comment: string,
    id: id
}]

## Post Blindtest

Request:
- {
    title: string,
    date: Date
    teams: [string],
    playedSongs: [PlayedSong]
}

Response:

204: no content


# How to use it in dev mode

We don't have

- https://medium.com/a-man-with-no-server/running-aws-lambda-and-api-gateway-locally-serverless-offline-3c64b3e54772

# AWS

## CLI

locally: ~/.local/bin/aws


## DynamoDB request / response

- https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html