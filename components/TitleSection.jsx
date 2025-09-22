// TitleWithChevron.js
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../app/styles/colors";
import GlobalStyles from "../app/styles/global-styles.js";

export function TitleSection({ title, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={GlobalStyles.title}>{title}</Text>
    {/*}  {onPress && (
        <TouchableOpacity onPress={onPress}>*/}
         <TouchableOpacity>
          <Ionicons name="chevron-forward" size={22} color={Colors.primary750} />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.neutral900,
  },
});
