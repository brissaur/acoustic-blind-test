
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