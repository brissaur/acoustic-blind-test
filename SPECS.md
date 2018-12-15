
# Object

## Team (string)

## Song 

{
    id: string
    title: string,
    artist: string,
    comment: string (long),
}

## BlindTest

{
    id: string
    date: Date (du jour)
    title: string
    teams: Team[]
    playedSong: PlayedSong[]
}

## PlayedSong

{
    songId: string
    team: string|null
}

# API Contract

## GetSong

Response:
200: [{
    name: string,
    artist: string,
    comment: string,
    id: string
}]

## Post Blindtest

Request:
- {
    title: string,
    date: Date
    teams: string[],
    playedSongs: PlayedSong[]
}

Response:

201
Payload: id of object