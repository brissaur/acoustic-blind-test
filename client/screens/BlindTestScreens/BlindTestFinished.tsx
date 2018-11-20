import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";

export default class BlindTestFinished extends React.Component<
  NavigationScreenProps
> {
  static navigationOptions = {
    title: "Blind Test Finished"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>THE END</Text>
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
