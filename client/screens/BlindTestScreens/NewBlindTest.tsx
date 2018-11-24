import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { Context, IContext } from "../../context";

export default class NewBlindTest extends React.Component<
  NavigationScreenProps
> {
  static navigationOptions = {
    title: "New Blind Test"
  };

  render() {
    return (
      <View style={styles.container}>
        <Context.Consumer>
          {({ setName }: IContext) => {
            return (
              <Button
                title="Next"
                onPress={() => {
                  const name = "some-name";
                  setName(name);
                  this.props.navigation.push("AddTeams");
                }}
              />
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
