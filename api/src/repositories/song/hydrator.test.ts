import SongHydrator from "./hydrator";
import Song from "./entity";

test("hydrate method", () => {
  const hydrator = new SongHydrator();
  const song = new Song();

  const data = {
    id: {
      N: "1"
    },
    title: {
      S: "title"
    },
    artist: {
      S: "artist"
    },
    comment: {
      S: "comment"
    }
  };
  hydrator.hydrate(data, song);

  expect(song.getId()).toBe("1");
  expect(song.getTitle()).toBe("title");
  expect(song.getArtist()).toBe("artist");
  expect(song.getComment()).toBe("comment");
});

test("extract method", () => {
  const hydrator = new SongHydrator();
  const song = new Song();
  expect(hydrator.extract(song)).toEqual({});
});
