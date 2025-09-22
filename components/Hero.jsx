import { Image, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../app/styles/global-styles";

export function HeroSection() {
  return (
    <View style={styles.hero}>
      <View style={styles.heroTextContainer}>
        <Text style={GlobalStyles.title}>Bem-vindo,</Text>
        <Text style={GlobalStyles.subtitle}>Sua jornada começa aqui</Text>
      </View>
      <Image
        source={require("../assets/images/hero-image.png")}
        style={styles.heroImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop:8,
    marginBottom: 8,
  },
  heroTextContainer: {
    flex: 1,
    paddingRight: 2,
  },
  heroImage: {
    width: 180,
    height: 120,
    resizeMode: "contain",
  },
});
