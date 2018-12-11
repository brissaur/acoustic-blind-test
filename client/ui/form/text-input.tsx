import * as React from "react";
import { FormInput, FormInputProps } from "react-native-elements";

import COLORS from "../COLORS";

export const TextInput: React.SFC<FormInputProps> = props => (
  <FormInput underlineColorAndroid={COLORS.PRIMARY} {...props} />
);
