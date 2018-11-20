import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { nextSong } from "../../business/Song";
import { setWinner } from "../../business/Winner";

const TEAMS = ["TEAM1", "TEAM2"]; // @todo
export default class SetSongWinner extends React.Component<
  NavigationScreenProps
> {
  static navigationOptions = {
    title: "Set Song Winner"
  };

  render() {
    return (
      <View style={styles.container}>
        {TEAMS.map(team => (
          <Button
            title={team}
            onPress={() => {
              setWinner(team);
              nextSong();
            }}
          />
        ))}
        <Button
          title={"==== NO WINNER ===="}
          onPress={() => {
            setWinner(null);
            nextSong(navigation);
          }}
        />
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
