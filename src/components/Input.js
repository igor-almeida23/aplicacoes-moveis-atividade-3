import React from "react";
import { TextInput } from "react-native";

import styles from "../styles/ManipulandoStyles";

const Input = ({ placeholder, type = "text", value, onChange }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={type === "password"}
      value={value}
      onChange={(e) => onChange(e.nativeEvent.text)}
    />
  );
};
export default Input;
