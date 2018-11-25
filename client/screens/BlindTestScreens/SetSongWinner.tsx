import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { Context, IContext } from "../../context";
import { getNextSong, goToNextSong } from "../../business/Song";

export default class NoMoreSongs extends React.Component<
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
          {(context: IContext) => {
            return (
              <>
                {context.teams.map(team => (
                  <Button
                    key={team}
                    title={team}
                    onPress={async () => {
                      await context.addResult({ team, songId });
                      goToNextSong(
                        context.getLatestContext(),
                        this.props.navigation
                      );
                    }}
                  />
                ))}
                <Button
                  title={"==== NO WINNER ===="}
                  onPress={async () => {
                    await context.addResult({ songId, team: null });
                    goToNextSong(
                      context.getLatestContext(),
                      this.props.navigation
                    );
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
