import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { goToNextSong } from "../../business/Song";
import { Context, IContext } from "../../context";

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
      <View style={styles.container}>
        <Context.Consumer>
          {(context: IContext) => {
            const mySong = context.songs.find(song => song.id === ID);
            if (!mySong) {
              return <Text>ERROR INVALID SONG</Text>;
            }
            return (
              <>
                <View>
                  <Text>Playing... {mySong.id}</Text>
                  <Text>title: {mySong.title}</Text>
                  <Text>artist: {mySong.artist}</Text>
                  {mySong.comment ? (
                    <Text>comment: {mySong.comment}</Text>
                  ) : null}
                </View>
                <Button
                  title="Winner"
                  onPress={() => {
                    this.props.navigation.push("SetSongWinner", {
                      id: ID
                    });
                  }}
                />
                <Button
                  title={"SKIP"}
                  onPress={async () => {
                    await context.skipSong(ID);

                    goToNextSong(
                      context.getLatestContext(),
                      this.props.navigation
                    );
                  }}
                />
                <Button
                  title="End"
                  onPress={() => {
                    this.props.navigation.push("BlindTestFinished");
                  }}
                />
              </>
            );
          }}
        </Context.Consumer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
