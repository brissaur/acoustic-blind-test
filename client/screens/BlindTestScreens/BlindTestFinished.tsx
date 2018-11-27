import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { computeDetails, computeWinner } from "../../business/BlindTest";
import { Context, IContext } from "../../context";

export default class BlindTestFinished extends React.Component<
  NavigationScreenProps
> {
  static navigationOptions = {
    title: "Blind Test Finished"
  };

  render() {
    return (
      <View style={styles.container}>
        <Context.Consumer>
          {(context: IContext) => {
            const details = computeDetails(context);
            const { team: winner, score } = computeWinner(details);
            return (
              <>
                <Text>
                  Winner: {winner} with {score} points
                </Text>
                <Text>Details:</Text>

                {Object.entries(details).map(([team, songs]) => (
                  <View key={team}>
                    <Text>Team {team} won the songs:</Text>
                    {songs.map(song => (
                      <Text key={song.id}>{`${song.title} // + ${
                        song.artist
                      }`}</Text>
                    ))}
                  </View>
                ))}
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
