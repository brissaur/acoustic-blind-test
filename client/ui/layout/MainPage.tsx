import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

interface IProps {
  title: string;
}

export const MainPage: React.SFC<IProps> = ({ children, title }) => (
  <ScrollView contentContainerStyle={styles.contentcontainer}>
    <>
      <Text h1>{title}</Text>
      {children}
    </>
  </ScrollView>
);

const styles = StyleSheet.create({
  contentcontainer: {
    justifyContent: "space-between",
    flexGrow: 1,
    padding: 20
  }
});
