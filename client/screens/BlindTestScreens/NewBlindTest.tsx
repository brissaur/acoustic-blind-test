import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";

export default class NewBlindTest extends React.Component<
  NavigationScreenProps
> {
  static navigationOptions = {
    title: "New Blind Test"
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Next"
          onPress={() => this.props.navigation.push("AddTeams")}
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
