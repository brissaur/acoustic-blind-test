import * as React from "react";
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  View
} from "react-native";
import { Text } from "react-native-elements";

interface IProps {
  title: string;
}

export const MainPage: React.SFC<IProps> = ({ children, title }) => (
  <ScrollView>
    <KeyboardAvoidingView
      contentContainerStyle={styles.contentContainer}
      behavior="position"
      keyboardVerticalOffset={65}
    >
      <View style={styles.header}>
        <Text h1>{title}</Text>
      </View>
      {children}
    </KeyboardAvoidingView>
  </ScrollView>
);

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    padding: 20
  },
  header: {
    marginBottom: 48
  }
});
