import React, { useState } from "react";
import { Text, View, Image, Alert } from "react-native";

import Button from "./src/components/Button";
import Input from "./src/components/Input";

import styles from "./src/styles/ManipulandoStyles";

export default function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitForm = (email, password) => {
    Alert.alert("Login realizado com sucesso.", `${email} ${password}`);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./src/image/reactnative.png")}
        style={styles.logo}
      />

      <Input
        placeholder="Informe seu e-mail"
        value={form.email}
        onChange={(value) => setForm({ ...form, email: value })}
      />

      <Input
        placeholder="Digite sua senha"
        type="password"
        value={form.password}
        onChange={(value) => setForm({ ...form, password: value })}
      />

      <Button onClick={() => submitForm(form.email, form.password)}>
        <Text style={styles.buttonText}>Acessar</Text>
      </Button>
    </View>
  );
}
