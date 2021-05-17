import React from "react";
import { TouchableOpacity } from "react-native";

import styles from "../styles/ManipulandoStyles";

const Button = ({ onClick, children }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onClick}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button