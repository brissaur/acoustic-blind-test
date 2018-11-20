import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { startBlindTest } from "../../business/BlindTest";

export default class AddTeams extends React.Component<NavigationScreenProps> {
  static navigationOptions = {
    title: "Add Teams"
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Next" onPress={() => startBlindTest()} />
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
