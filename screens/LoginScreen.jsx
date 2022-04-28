import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    //Retrieve user from Firebase and log them in
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user.email);
      console.log(user.uid);
      setEmail("");
      setPassword("");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleRegister}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
