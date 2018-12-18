
# Object

## Team (string)

## Song

`
{
    id: string
    title: string,
    artist: string,
    comment: string (long),
}
`

sample:

`
{
    "title": "title",
    "artist": "artist",
    "comment": "comment"
}
`

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
    title: string,
    artist?: string,
    comment?: string,
    id: string
}]

## Post Blindtest

Request:
`
{
    title: string,
    date: Date
    teams: string[],
    playedSongs: PlayedSong[]
}
`

(example) :
`
{
    "title": "title",
    "date": "2018-12-15 19:34:00",
    "teams": ["teamA","teamB"],
    "playedSongs": [
        {
            "songId": "1",
            "team": "teamA"
        },
        {
            "songId": "2",
            "team": "teamB"
        }
    ]
}
`


Response:

201
Payload: id of object