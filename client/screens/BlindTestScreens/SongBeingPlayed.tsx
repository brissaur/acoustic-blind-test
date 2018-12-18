import * as React from "react";
import { Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { goToNextSong } from "../../business/Song";
import { Context, IContext } from "../../context";
import Button from "../../ui/button/Button";
import { MainPage } from "../../ui/layout/MainPage";
import { finishBlindTest } from "../../business/BlindTest";

export default class SongBeingPlayed extends React.Component<
  NavigationScreenProps
> {
  static navigationOptions = {
    title: "Song Being Played",
    headerLeft: null
  };

  render() {
    const ID = this.props.navigation.getParam("id");

    return (
      <MainPage title="Playing...">
        <Context.Consumer>
          {(context: IContext) => {
            const mySong = context.songs.find(song => song.id === ID);
            if (!mySong) {
              return <Text>ERROR INVALID SONG</Text>;
            }
            return (
              <>
                <View>
                  <Text>title: {mySong.title}</Text>
                  <Text>artist: {mySong.artist || "- ? -"}</Text>
                  {mySong.comment ? (
                    <Text>comment: {mySong.comment}</Text>
                  ) : null}
                </View>
                <Button.Primary
                  title="Winner"
                  onPress={() => {
                    this.props.navigation.push("SetSongWinner", {
                      id: ID
                    });
                  }}
                />
                <Button.Secondary
                  title={"SKIP"}
                  onPress={async () => {
                    await context.skipSong(ID);

                    goToNextSong(
                      context.getLatestContext(),
                      this.props.navigation
                    );
                  }}
                />
                <Button.Secondary
                  title="End"
                  onPress={() =>
                    finishBlindTest({
                      context,
                      navigation: this.props.navigation
                    })
                  }
                />
              </>
            );
          }}
        </Context.Consumer>
      </MainPage>
    );
  }
}
