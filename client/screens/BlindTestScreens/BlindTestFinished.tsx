import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { computeDetails, computeWinner } from "../../business/BlindTest";
import { Context, IContext } from "../../context";
import { MainPage } from "../../ui/layout/MainPage";
import COLORS from "../../ui/COLORS";

export default class BlindTestFinished extends React.Component<
  NavigationScreenProps
> {
  static navigationOptions = {
    title: "Blind Test Finished"
  };

  render() {
    return (
      <MainPage title="The dices are jetteed!">
        <Context.Consumer>
          {(context: IContext) => {
            const details = computeDetails(context);
            const { team: winner, score } = computeWinner(details);
            return (
              <>
                <Text h3>
                  Winner: {winner} with {score} points
                </Text>
                <Text h4>Details:</Text>
                {Object.entries(details).map(([team, songs]) => (
                  <Text key={team}>
                    {team}: {songs.length} points
                  </Text>
                ))}
                <Text h4>Details:</Text>
                {Object.entries(details).map(([team, songs]) => (
                  <View key={team}>
                    <Text>
                      Team <Text style={styles.teamName}>{team}</Text> won the
                      songs:
                    </Text>
                    {songs.map(song => (
                      <Text key={song.id}>{`${song.title} // ${
                        song.artist
                      }`}</Text>
                    ))}
                  </View>
                ))}
              </>
            );
          }}
        </Context.Consumer>
      </MainPage>
    );
  }
}

const styles = StyleSheet.create({
  teamName: {
    color: COLORS.PRIMARY
  }
});
