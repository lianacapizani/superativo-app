import { StyleSheet } from "react-native";
import Colors from "./colors";
import Typography from "./typography";

const GlobalStyles = StyleSheet.create({
  // Layout base
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  // Textos
  title: {
    fontFamily: Typography.bold,
    fontSize: 22,
    color: Colors.primary800,
    marginBottom:20,
  },
  subtitle: {
    fontFamily: Typography.regular,
    fontSize: 16,
    color: Colors.primary750,
    marginBottom:16,
  },
  paragraph: {
    fontFamily: Typography.regular,
    fontSize: 16,
    color: Colors.primary500,
    lineHeight: 22,
  },

  // Botão primário
  buttonPrimary: {
    backgroundColor: Colors.primary500,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  buttonPrimaryText: {
    fontFamily: Typography.bold,
    fontSize: 16,
    color: "#fff",
  },

  // Botão secundário
  buttonSecondary: {
    backgroundColor: Colors.secondary500,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  buttonSecondaryText: {
    fontFamily: Typography.bold,
    fontSize: 16,
    color: "#fff",
  },

});

export default GlobalStyles;