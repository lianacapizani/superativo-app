import { StyleSheet } from "react-native";
import Colors from "./colors";
import Typography from "./typography";

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingBottom: 8,
  },

  title: {
    fontFamily: Typography.semibold,
    fontSize: 20,
    color: Colors.primary800,
    marginBottom:8,
  },
  subtitle: {
    fontFamily: Typography.regular,
    fontSize: 16,
    color: Colors.neutral800,
    marginBottom:16,
  },
  paragraph: {
    fontFamily: Typography.light,
    fontSize: 16,
    color: Colors.primary500,
    lineHeight: 22,
  },

  // Botão primário
  buttonPrimary: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonPrimaryText: {
    fontFamily: Typography.semibold,
    fontSize: 14,
    color: "#fff",
  },

  // Botão secundário
  buttonSecondary: {
    backgroundColor: Colors.secondary500,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonSecondaryText: {
    fontFamily: Typography.semibold,
    fontSize: 14,
    color: "#fff",
  },

});

export default GlobalStyles;