import SongHydrator from "./hydrator";
import Song from "./entity";

test("hydrate method", () => {
  const hydrator = new SongHydrator();
  const song = new Song();

  const data = {
    id: "1",
    title: "title",
    artist: "artist",
    comment: "comment"
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
  song.setId("uuid");
  song.setArtist("artist");
  song.setTitle("title");
  song.setComment("comment");
  expect(hydrator.extract(song)).toEqual({
    id: "uuid",
    artist: "artist",
    title: "title",
    comment: "comment"
  });
});
