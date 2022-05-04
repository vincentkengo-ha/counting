import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { CommonStyles } from "../styles/CommonStyles";

export const RemoveButton = ({ text, submit }) => (
  <TouchableOpacity style={styles.button} onPress={submit}>
    <Text style={CommonStyles.textItem}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    margin: 1,
    backgroundColor: "red",
    alignItems: "flex-end",
  },
});