jest.mock("uuid");
import SongRepository from "./repository";
import SongHydrator from "./hydrator";
import Song from "./entity";

test("getAllSongs method works", async () => {
  const getConnection = jest.fn(() => {
    return {
      scan: jest.fn(() => {
        return {
          promise: () => {
            return Promise.resolve({
              Items: [
                {
                  comment: "comment",
                  artist: "artist",
                  id: "1",
                  title: "test"
                }
              ]
            });
          }
        };
      })
    };
  });
  const repo = new SongRepository(getConnection(), new SongHydrator());
  const songs = await repo.getAllSongs();
  expect(songs).toHaveLength(1);
});

test("getAllSongs method throw error", async () => {
  const getConnection = jest.fn(() => {
    return {
      scan: jest.fn(() => {
        return {
          promise: () => {
            return Promise.reject("error occured");
          }
        };
      })
    };
  });
  const repo = new SongRepository(getConnection(), new SongHydrator());
  try {
    await repo.getAllSongs();
  } catch (e) {
    expect(e).toEqual("error occured");
  }
});

test("createSong works", async () => {
  const getConnection = jest.fn(() => {
    return {
      put: jest.fn(() => {
        return {
          promise: () => {
            return Promise.resolve({
              Items: [
                {
                  id: "00000000-0000-0000-0000-000000000001",
                  artist: "artist",
                  title: "title",
                  comment: "comment"
                }
              ]
            });
          }
        };
      })
    };
  });
  const repo = new SongRepository(getConnection(), new SongHydrator());
  const song = new Song();
  song.setArtist("artist");
  song.setTitle("title");
  song.setComment("comment");
  const result = await repo.createSong(song);
  expect(result).toBe("mock-uuid");
});
