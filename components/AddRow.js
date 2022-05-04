import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { CommonStyles } from "../styles/CommonStyles";
import { CountButton } from "./CountButton";

export const AddRow = ({ addNewCountable }) => {
  const [name, setName] = useState("");

  return (
    <View style={CommonStyles.row}>
      <View style={styles.setNameColumn}>
        <TextInput placeholder="Enter name" onChangeText={setName} />
      </View>
      <View style={styles.buttonAddColumn}>
        <CountButton
          text="Add"
          submit={() => {
            addNewCountable(name);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  setNameColumn: {
    flex: 0.7,
    alignItems: "center",
  },
  buttonAddColumn: {
    flex: 0.3,
  },
});
