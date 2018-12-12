import * as React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { FormLabel } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { Context, IContext } from "../../context";
import Button from "../../ui/button/Button";
import { TextInput } from "../../ui/form/text-input";
import { MainPage } from "../../ui/layout/MainPage";

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
  resetForm = () => this.setFormName("");

  render() {
    return (
      <MainPage title="Please choose a name!">
        <Context.Consumer>
          {({ setName }: IContext) => {
            return (
              <>
                <View>
                  <FormLabel>Name</FormLabel>
                  <View style={styles.form}>
                    <TouchableHighlight onPress={this.resetForm}>
                      <FormLabel>RESET</FormLabel>
                    </TouchableHighlight>
                    <TextInput
                      value={this.state.name}
                      onChangeText={this.setFormName}
                    />
                  </View>
                </View>
                <Button.Primary
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
      </MainPage>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
