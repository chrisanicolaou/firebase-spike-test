import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { auth, signOut } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigation.replace("Login");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleCreateHobby = () => {
    navigation.navigate("CreateHobbyScreen");
  };

  return (
    <View>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCreateHobby}>
        <Text>Create Hobby</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
