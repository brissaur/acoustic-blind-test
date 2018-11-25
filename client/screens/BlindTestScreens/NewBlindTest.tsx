import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, FormInput, FormLabel } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { Context, IContext } from "../../context";

interface IState {
  name: string;
}
export default class NewBlindTest extends React.Component<
  NavigationScreenProps,
  IState
> {
  static navigationOptions = {
    title: "New Blind Test"
  };
  state: IState = { name: `Blind Test ${new Date().getTime()}` };
  setFormName = (name: string) => this.setState({ name });
  render() {
    return (
      <View style={styles.container}>
        <Context.Consumer>
          {({ setName }: IContext) => {
            return (
              <>
                <FormLabel>Name</FormLabel>
                <FormInput
                  value={this.state.name}
                  onChangeText={this.setFormName}
                />
                <Button
                  title="Next"
                  onPress={() => {
                    if (!this.state.name) {
                      return;
                    }
                    setName(this.state.name);
                    this.props.navigation.push("AddTeams");
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
