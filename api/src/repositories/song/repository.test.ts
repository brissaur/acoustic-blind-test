import SongRepository from "./repository";

jest.mock('aws-sdk/clients/dynamodb');
import DynamoDb = require("aws-sdk/clients/dynamodb");
import SongHydrator from "./hydrator";

test("getAllSongs method works", async () => {
    const getConnection = jest.fn(() => {
        const service = new DynamoDb();
        service.scan = jest.fn(() => {
            return {
                promise: () => {
                    return Promise.resolve({
                        Items: [
                            {
                                comment: { S: 'comment' },
                                artist: { S: 'artist' },
                                id: { N: '1' },
                                title: { S: 'test' }
                            }
                        ]
                    });
                }
            };
        });
        return service;
    });
    const repo = new SongRepository(getConnection(), new SongHydrator());
    const songs = await repo.getAllSongs();
    expect(songs).toHaveLength(1);
});

test("getAllSongs method throw error", async () => {
    const getConnection = jest.fn(() => {
        const service = new DynamoDb();
        service.scan = jest.fn(() => {
            return {
                promise: () => {
                    return Promise.reject('error occured');
                }
            };
        });
        return service;
    });
    const repo = new SongRepository(getConnection(), new SongHydrator());
    try{
        await repo.getAllSongs();
    }catch (e) {
        expect(e).toEqual('error occured');
    }
});