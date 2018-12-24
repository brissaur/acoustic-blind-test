import * as React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import SettingsScreen from "../screens/SettingsScreen";
import NewBlindTest from "../screens/BlindTestScreens/NewBlindTest";
import AddTeams from "../screens/BlindTestScreens/AddTeams";
import SongBeingPlayed from "../screens/BlindTestScreens/SongBeingPlayed";
import SetSongWinner from "../screens/BlindTestScreens/SetSongWinner";
import BlindTestFinished from "../screens/BlindTestScreens/BlindTestFinished";
import NoMoreSongs from "../screens/BlindTestScreens/NoMoreSongs";

const BlindTestStack = createStackNavigator({
  NewBlindTest,
  AddTeams,
  SongBeingPlayed,
  SetSongWinner,
  BlindTestFinished,
  NoMoreSongs
});

BlindTestStack.navigationOptions = {
  tabBarLabel: "BlindTests",
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

export default createBottomTabNavigator({
  BlindTestStack,
  SettingsStack
});
