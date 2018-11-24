import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { Context, IContext } from "../../context";

export default class SetSongWinner extends React.Component<
  NavigationScreenProps
> {
  static navigationOptions = {
    title: "Set Song Winner"
  };

  render() {
    const songId = this.props.navigation.getParam("id");

    return (
      <View style={styles.container}>
        <Context.Consumer>
          {({ teams, addResult }: IContext) => {
            return (
              <>
                {teams.map(team => (
                  <Button
                    key={team}
                    title={team}
                    onPress={() => {
                      addResult({ team, songId });
                      const nextSong = 3;
                      this.props.navigation.push("SongBeingPlayed", {
                        id: nextSong
                      });
                    }}
                  />
                ))}
                <Button
                  title={"==== NO WINNER ===="}
                  onPress={() => {
                    addResult({ songId, team: null });
                    const nextSong = 3;
                    this.props.navigation.push("SongBeingPlayed", {
                      id: nextSong
                    });
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
