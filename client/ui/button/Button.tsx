import * as React from "react";
import { Button as RNEButton, ButtonProps } from "react-native-elements";
import { StyleSheet } from "react-native";
import COLORS from "../COLORS";

const Primary = ({ style, ...params }: ButtonProps) => (
  <RNEButton buttonStyle={[style, styles.primary]} {...params} />
);

const Secondary = ({ style, ...params }: ButtonProps) => (
  <RNEButton
    buttonStyle={[style, styles.secondary]}
    color={COLORS.PRIMARY}
    {...params}
  />
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
    backgroundColor: COLORS.WHITE,
    color: COLORS.PRIMARY, // styling colors for RNEButton goes with the color prop. Remaining here for consistency
    borderColor: COLORS.PRIMARY,
    borderWidth: 1,
    borderRadius: 20
  }
});
