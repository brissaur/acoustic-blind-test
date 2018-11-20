import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import UnstateContainer from "../../UnstateContainer";
import { Subscribe, Container } from "unstated";

export default class NewBlindTest extends React.Component<
  NavigationScreenProps
> {
  static navigationOptions = {
    title: "New Blind Test"
  };

  render() {
    // return <Text>Robi</Text>;
    console.log("robin3");
    return (
      // <React.Fragment>
      //   <View style={styles.container}>
      //     <Button
      //       title="Next"
      //       onPress={() => this.props.navigation.push("AddTeams")}
      //     />
      <View style={styles.container}>
        <Text>YALLLLLLLLAAA</Text>
        <Text>YALLLLLLLLAAA</Text>
        <Text>YALLLLLLLLAAA</Text>
        <Subscribe to={[UnstateContainer]}>
          {(store: UnstateContainer) => (
            <Button
              title={"INCREMENT" + store.state.count}
              // onPress={() => store.setState({ count: 3 })}
              onPress={() => store.increment()}
            />
          )}
        </Subscribe>
      </View>
      // </View>
      // </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
