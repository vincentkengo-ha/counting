import { StyleSheet, Text, View } from "react-native";

import { CommonStyles } from "../styles/CommonStyles";
import { CountButton } from "./CountButton";
import { RemoveButton } from "./RemoveButton";

export const CountableRow = ({ countable, changeCounts, index }) => (
  <View style={CommonStyles.row}>
    <View style={styles.nameColumn}>
      <Text style={CommonStyles.textItem}>{countable.name}</Text>
      <Text style={CommonStyles.textItem}>{countable.count}</Text>
    </View>
    <View style={styles.buttonColumn}>
      <CountButton
        text="+"
        submit={() => {
          changeCounts(1, index);
        }}
      />
      <CountButton
        text="-"
        submit={() => {
          if (countable.count !== 0) changeCounts(-1, index);
        }}
      />
    </View>
    <View style={styles.removeButton}>
      <RemoveButton
        text="Remove"
        submit={() => {
          
        }}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  nameColumn: {
    flex: 0.8,
    alignItems: "center",
  },
  buttonColumn: {
    flex: 0.2,
  },
  removeButton: {
    alignItems: "flex-end"
  }
});
