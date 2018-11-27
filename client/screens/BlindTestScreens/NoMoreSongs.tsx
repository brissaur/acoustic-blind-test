import * as React from "react";
import { NavigationScreenProps } from "react-navigation";
import { goToNextSong } from "../../business/Song";
import { Context, IContext } from "../../context";
import Button from "../../ui/button/Button";
import { MainPage } from "../../ui/layout/MainPage";
import { Text } from "react-native-elements";

export default class NoMoreSongs extends React.Component<
  NavigationScreenProps
> {
  static navigationOptions = {
    title: "No More Songs",
    headerLeft: null
  };

  render() {
    return (
      <MainPage title="Whaaaaat?">
        <Context.Consumer>
          {(context: IContext) => {
            return (
              <>
                <Text h3>There are no more songs. What do you want to do?</Text>

                <Button.Primary
                  title={"REPLAY SKIPPED"}
                  onPress={async () => {
                    await context.replaySkipped();

                    goToNextSong(
                      context.getLatestContext(),
                      this.props.navigation
                    );
                  }}
                />
                <Button.Secondary
                  title="End"
                  onPress={() => {
                    this.props.navigation.push("BlindTestFinished");
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
