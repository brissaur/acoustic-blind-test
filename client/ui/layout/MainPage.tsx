import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

interface IProps {
  title?: string;
}

export const MainPage: React.SFC<IProps> = ({ children, title }) => (
  <ScrollView contentContainerStyle={styles.container}>
    <>
      {title ? <Text h1>{title}</Text> : null}
      {children}
    </>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20
  }
});
