import { View, Image, TouchableOpacity, StyleSheet, StatusBar, Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../app/styles/colors";

export function HeaderBar() {
  const isWeb = Platform.OS === "web";

  return (
    <View style={styles.safeContainer}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary500} />
      <View style={[styles.container, isWeb && styles.containerWeb]}>
        <Image
          source={require("../assets/images/logo-n.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="calendar-outline" size={24} color={Colors.neutral50} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color={Colors.neutral50} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="settings-outline" size={24} color={Colors.neutral50} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: Colors.primary500,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 60, 
    paddingBottom: 16,
  },
  containerWeb: {
    paddingTop: 20, 
  },
  logo: {
    width: 110,
    height: 40,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 12,
  },
});
