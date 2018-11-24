import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { Context, IContext } from "../../context";

export default class SongBeingPlayed extends React.Component<
  NavigationScreenProps
> {
  static navigationOptions = {
    title: "Song Being Played"
  };

  render() {
    const ID = this.props.navigation.getParam("id");
    return (
      <View style={styles.container}>
        <Context.Consumer>
          {({ songs, skipSong }: IContext) => {
            const mySong = songs.find(song => song.id === ID);
            if (!mySong) {
              return <Text>ERROR INVALID SONG</Text>;
            }
            return (
              <>
                <View>
                  <Text>Playing...</Text>
                  <Text>title: {mySong.title}</Text>
                  <Text>artist: {mySong.artist}</Text>
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
                  onPress={() => {
                    skipSong(ID);
                    const nextSong = 3;
                    this.props.navigation.push("SongBeingPlayed", {
                      id: nextSong
                    });
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
