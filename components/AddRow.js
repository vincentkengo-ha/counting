import { useState } from "react";
import { View, TextInput } from "react-native";

import { CommonStyles } from "../styles/CommonStyles";
import { CountButton } from "./CountButton";

export const AddRow = ({ addNewCountable }) => {
  const [name, setName] = useState("");

  return (
    <View style={CommonStyles.row}>
      <TextInput
        placeholder="Enter name"
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <CountButton
        text="Add"
        submit={() => {
          addNewCountable(name);
        }}
      />
    </View>
  );
};
