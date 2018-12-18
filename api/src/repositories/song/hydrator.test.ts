import SongHydrator from "./hydrator";
import Song from "./entity";

[
  {
    data: {
      id: "1",
      title: "title",
      artist: "artist",
      comment: "comment"
    },
    expected: {
      id: "1",
      title: "title",
      artist: "artist",
      comment: "comment"
    }
  },
  {
    data: {
      id: "1",
      title: "title"
    },
    expected: {
      id: "1",
      title: "title",
      artist: undefined,
      comment: undefined
    }
  }
].forEach(data => {
  test("hydrate method", () => {
    const hydrator = new SongHydrator();
    const song = new Song();

    hydrator.hydrate(data.data, song);

    expect(song.getId()).toBe(data.expected.id);
    expect(song.getTitle()).toBe(data.expected.title);
    expect(song.getArtist()).toBe(data.expected.artist);
    expect(song.getComment()).toBe(data.expected.comment);
  });
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
