import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import Colors from "./styles/colors";

export default function WelcomeHome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logologin.png")} 
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.slogan}>Porque saúde também é atitude.</Text>

        <TouchableOpacity
            style={[styles.button, styles.alunoButton]}
            onPress={() => router.push("/aluno/login")}
        >
            <Text style={styles.buttonText}>Sou Aluno</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.button, styles.professorButton]}
            onPress={() => router.push("/professor/login")}
        >
            <Text style={styles.buttonText}>Sou Professor</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/SignUp")}>
            <Text style={styles.linkText}>
            Não possui conta ainda? <Text style={styles.linkHighlight}>Cadastre-se aqui</Text>
            </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  logo: {
    width: 240,
    height: 240,
    marginBottom: 24,
  },
  slogan: {
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
    color: Colors.primary500,
    textAlign: "center",
    marginBottom: 200,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal:14,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: "center",
    width: 350,
  },
  alunoButton: {
    backgroundColor: Colors.primary500,
  },
  professorButton: {
    backgroundColor: Colors.secondary750,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
  },
  linkText: {
    fontFamily: "MontserratRegular",
    fontSize: 14,
    color: Colors.neutral700,
    marginTop: 16,
  },
  linkHighlight: {
    color: Colors.primary500,
    fontFamily: "MontserratSemiBold",
  },
});
