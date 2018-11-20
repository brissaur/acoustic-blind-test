// @ts-ignore
import { AppLoading, Asset, Font, Icon } from "expo";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Provider, Subscribe } from "unstated";
import AppNavigator from "./navigation/AppNavigator";
import UnstateContainer from "./UnstateContainer";
import { Text } from "react-native-elements";

interface IProps {
  skipLoadingScreen?: boolean;
}

export default class AppWithoutState extends React.Component<IProps> {
  state = {
    isLoadingComplete: false
  };

  render() {
    console.log("robin1");
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      console.log("robin2");
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <Provider>
            <AppNavigator />
            {/* <Subscribe to={[UnstateContainer]}>
              {store => (
                <>
                  <Text>Rob,,,</Text>
                  <Text>Rob,,,</Text>
                  <Text>Rob,,,</Text>
                  <Text>Rob,,,</Text>
                  <Text>Rob,,,</Text>
                  <Text>Rob,,,</Text>
                </>
              )}
            </Subscribe> */}
          </Provider>
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
      })
    ]).then(() => {});
  };

  _handleLoadingError = (error: Error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

// export default function App2() {
//   return (
//     <Provider>
//       <AppWithoutState />
//     </Provider>
//   );
// }
