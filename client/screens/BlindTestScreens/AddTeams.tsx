import * as React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { FormLabel } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { startBlindTest } from "../../business/BlindTest";
import { Context, IContext, ITeam } from "../../context";
import Button from "../../ui/button/Button";
import { TextInput } from "../../ui/form/text-input";
import { MainPage } from "../../ui/layout/MainPage";

interface IState {
  teams: ITeam[];
  newTeam: ITeam;
}
export default class AddTeams extends React.Component<
  NavigationScreenProps,
  IState
> {
  static navigationOptions = {
    title: "Add Teams"
  };
  state: IState = {
    teams: ["Les jeunes", "Les moins jeunes"],
    newTeam: ""
  };
  addTeam = (team: ITeam) =>
    this.state.newTeam
      ? this.setState({ teams: this.state.teams.concat([team]) })
      : undefined;
  onTextChange = (newTeam: ITeam) => this.setState({ newTeam });
  resetInput = () => this.setState({ newTeam: "" });
  removeTeam = (removedTeam: ITeam) =>
    this.setState({
      teams: this.state.teams.filter(team => team !== removedTeam)
    });
  render() {
    return (
      <MainPage title="Please add teams!">
        <Context.Consumer>
          {(context: IContext) => {
            return (
              <>
                <View>
                  {this.state.teams.map((team, index) => (
                    <View key={team} style={styles.team}>
                      <Text>
                        Team {index + 1}:{team}
                      </Text>
                      <TouchableHighlight onPress={() => this.removeTeam(team)}>
                        <Text>DELETE</Text>
                      </TouchableHighlight>
                    </View>
                  ))}
                </View>
                <FormLabel>New team name:</FormLabel>
                <TextInput
                  underlineColorAndroid="purple"
                  value={this.state.newTeam}
                  onChangeText={this.onTextChange}
                />
                <Button.Secondary
                  title="Add Team"
                  onPress={() => {
                    this.addTeam(this.state.newTeam);
                    this.resetInput();
                  }}
                />
                <Button.Primary
                  title="Start Blind Test"
                  onPress={() =>
                    startBlindTest({
                      context,
                      teams: this.state.teams,
                      navigation: this.props.navigation
                    })
                  }
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
  team: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
