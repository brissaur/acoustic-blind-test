import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { nextSong } from "../../business/Song";
import { endBlindTest } from "../../business/BlindTest";

export default class SongBeingPlayed extends React.Component<
  NavigationScreenProps
> {
  static navigationOptions = {
    title: "Song Being Played"
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Skip"
          onPress={() =>
            this.props.navigation.push("SongBeingPlayed", { id: 3 })
          }
        />
        <Button
          title={"SKIP"}
          onPress={() => {
            nextSong();
          }}
        />
        <Button title="End" onPress={() => endBlindTest()} />
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
