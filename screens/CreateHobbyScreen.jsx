import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { collection, addDoc, db } from "../firebase";

const CreateHobbyScreen = () => {
  const [hobby, setHobby] = useState("");
  const handleHobbyButton = async () => {
    try {
      const docRef = await addDoc(collection(db, "hobbies"), JSON.parse(hobby));
      console.log("Document: ", docRef);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View>
      <TextInput
        placeholder="Hobby"
        value={hobby}
        onChangeText={(text) => setHobby(text)}
      />
      <TouchableOpacity onPress={handleHobbyButton}>
        <Text>Create Hobby</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateHobbyScreen;
