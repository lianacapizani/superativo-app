import { StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../app/styles/global-styles.js";

export function TitleSection({ title,  }) {
  return (
    <View style={[styles.container]}>
      <Text style={GlobalStyles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
