import { IContext, ISongId } from "./../context";

export function getNextSong(context: IContext): ISongId | null {
  const potentialSongs = context.songs
    .filter(song => !context.results.find(result => result.songId === song.id))
    .filter(song => !context.skipedSongs.find(songId => songId === song.id));

  if (potentialSongs.length === 0) {
    return null;
  }

  return potentialSongs[Math.floor(Math.random() * potentialSongs.length)].id;
}

// @todo any
export function goToNextSong(context: IContext, navigation: any): void {
  global.console.log("goToNextSong", context);
  const nextSong = getNextSong(context);
  if (!nextSong) {
    navigation.push("NoMoreSongs");
  } else {
    navigation.push("SongBeingPlayed", {
      id: nextSong
    });
  }
}
