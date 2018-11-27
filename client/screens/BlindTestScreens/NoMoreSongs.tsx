import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { goToNextSong } from "../../business/Song";
import { Context, IContext } from "../../context";

export default class NoMoreSongs extends React.Component<
  NavigationScreenProps
> {
  static navigationOptions = {
    title: "No More Songs",
    headerLeft: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Context.Consumer>
          {(context: IContext) => {
            return (
              <>
                <Text>What do you want to do?</Text>

                <Button
                  title={"REPLAY SKIPPED"}
                  onPress={async () => {
                    await context.replaySkipped();

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
