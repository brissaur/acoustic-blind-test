import * as React from "react";
import { NavigationScreenProps } from "react-navigation";
import { goToNextSong } from "../../business/Song";
import { Context, IContext } from "../../context";
import Button from "../../ui/button/Button";
import { MainPage } from "../../ui/layout/MainPage";
import commonStyles from "../../ui/STYLES";

export default class NoMoreSongs extends React.Component<
  NavigationScreenProps
> {
  static navigationOptions = {
    title: "Set Song Winner"
  };

  render() {
    const songId = this.props.navigation.getParam("id");

    return (
      <MainPage title="Who?">
        <Context.Consumer>
          {(context: IContext) => {
            return (
              <>
                {context.teams.map(team => (
                  <Button.Primary
                    style={commonStyles.separatorBottom}
                    key={team}
                    title={team}
                    onPress={async () => {
                      await context.addResult({ team, songId });
                      goToNextSong(
                        context.getLatestContext(),
                        this.props.navigation
                      );
                    }}
                  />
                ))}
                <Button.Primary
                  title={"==== NO WINNER ===="}
                  onPress={async () => {
                    await context.addResult({ songId, team: null });
                    goToNextSong(
                      context.getLatestContext(),
                      this.props.navigation
                    );
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
