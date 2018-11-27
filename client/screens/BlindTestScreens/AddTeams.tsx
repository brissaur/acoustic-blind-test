import * as React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { Button, FormLabel, FormInput } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { startBlindTest } from "../../business/BlindTest";
import { Context, IContext, ITeam } from "../../context";

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
      <View style={styles.container}>
        <Context.Consumer>
          {(context: IContext) => {
            return (
              <>
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
                <FormLabel>New team name:</FormLabel>
                <FormInput
                  value={this.state.newTeam}
                  onChangeText={this.onTextChange}
                />
                <Button
                  title="Add Team"
                  onPress={() => {
                    this.addTeam(this.state.newTeam);
                    this.resetInput();
                  }}
                />
                <Button
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  team: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
