import * as React from "react";
import { Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { goToNextSong } from "../../business/Song";
import { Context, IContext } from "../../context";
import Button from "../../ui/button/Button";
import { MainPage } from "../../ui/layout/MainPage";
import { finishBlindTest } from "../../business/BlindTest";
import commonStyles from "../../ui/STYLES";

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
                <View style={commonStyles.separatorBottom}>
                  <Text>title: {mySong.title}</Text>
                  <Text>artist: {mySong.artist || "- ? -"}</Text>
                  {mySong.comment ? (
                    <Text>comment: {mySong.comment}</Text>
                  ) : null}
                </View>
                <Button.Primary
                  style={[
                    commonStyles.separatorBottom,
                    commonStyles.separatorTop
                  ]}
                  title="Winner"
                  onPress={() => {
                    this.props.navigation.push("SetSongWinner", {
                      id: ID
                    });
                  }}
                />
                <Button.Secondary
                  title={"SKIP"}
                  style={commonStyles.separatorBottom}
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
