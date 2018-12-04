import * as React from "react";
import { Button as RNEButton, ButtonProps } from "react-native-elements";
import { StyleSheet } from "react-native";
import COLORS from "../COLORS";

const Primary = ({ ...params }: ButtonProps) => (
  <RNEButton buttonStyle={[styles.primary]} {...params} />
);

const Secondary = ({ ...params }: ButtonProps) => (
  <RNEButton buttonStyle={[styles.secondary]} {...params} />
);

const Button = {
  Primary,
  Secondary
};

export default Button;

const styles = StyleSheet.create({
  primary: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 20
  },
  secondary: {
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 20
  }
});
