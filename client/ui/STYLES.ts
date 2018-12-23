import { StyleSheet } from "react-native";

const SEPARATOR_VALUE = 20;

const commonStyles = StyleSheet.create({
  separator: {
    height: SEPARATOR_VALUE
  },
  separatorBottom: {
    marginBottom: SEPARATOR_VALUE
  },
  separatorTop: {
    marginTop: SEPARATOR_VALUE
  }
});

export default commonStyles;
