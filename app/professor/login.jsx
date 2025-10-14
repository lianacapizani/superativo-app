import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import Colors from "../styles/colors";
import Typography from "../styles/typography";
import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showSenha, setShowSenha] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      router.push("/(tabs)");
    } catch (error) {
      console.error(error);
      const code = error.code || error?.nativeErrorCode || "unknown";

      if (code === "auth/user-not-found" || code === "auth/wrong-password") {
        Alert.alert("Erro", "E-mail ou senha incorretos.");
      } else if (code === "auth/invalid-email") {
        Alert.alert("Erro", "E-mail inválido.");
      } else {
        Alert.alert("Erro", "Erro ao entrar. Tente novamente.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Bem-vindo, Professor!</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor={Colors.neutral500}
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Senha */}
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Senha"
            secureTextEntry={!showSenha}
            placeholderTextColor={Colors.neutral500}
            style={styles.inputPassword}
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity onPress={() => setShowSenha(!showSenha)}>
            <Ionicons name={showSenha ? "eye-off" : "eye"} size={24} color={Colors.neutral500} />
          </TouchableOpacity>
        </View>

        <Pressable
          style={styles.checkboxContainer}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View
            style={[styles.checkbox, rememberMe && styles.checkboxChecked]}
          />
          <Text style={styles.checkboxLabel}>Lembrar-me</Text>
        </Pressable>

        <TouchableOpacity style={styles.button}onPress={() => router.push("/professor/(tabs)")}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.signup}>Não possui conta?</Text>
          <TouchableOpacity onPress={() => router.push("/SignUp")}>
            <Text style={styles.signupLink}>Cadastre-se aqui</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => router.replace("/")}
          >
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  inner: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingTop: 80,
  },
  logo: {
    width: 110,
    height: 110,
    resizeMode: "contain",
    marginBottom: 80,
  },
  title: {
    fontSize: 22,
    fontFamily: Typography.semibold,
    marginBottom: 24,
    color: Colors.primary800,
  },
  input: {
    width: "100%",
    height: 48,
    backgroundColor: "#fff",
    borderColor: Colors.neutral300,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 14,
    fontFamily: Typography.regular,
    color: Colors.neutral900,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 48,
    backgroundColor: "#fff",
    borderColor: Colors.neutral300,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 14,
  },
  inputPassword: {
    flex: 1,
    fontFamily: Typography.regular,
    color: Colors.neutral900,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 20,
    marginTop: 4,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: Colors.neutral500,
    borderRadius: 4,
    marginRight: 8,
    backgroundColor: "#fff",
  },
  checkboxChecked: {
    backgroundColor: Colors.primary500,
  },
  checkboxLabel: {
    fontSize: 12,
    fontFamily: Typography.regular,
    color: Colors.neutral800,
  },
  button: {
    width: "100%",
    height: 48,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: Typography.semibold,
  },
  signup: {
    marginTop: 40,
    color: Colors.neutral900,
    fontSize: 14,
    textAlign: "center",
    fontFamily: Typography.medium,
  },
  signupLink: {
    marginTop: 8,
    color: Colors.primary800,
    fontSize: 16,
    textAlign: "center",
    textDecorationLine: "underline",
    fontFamily: Typography.medium,
  },
  backButtonContainer: {
    alignSelf: "center",
    marginTop: 80,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.neutral100,
    borderRadius: 8,
  },
  backButtonText: {
    fontFamily: Typography.regular,
    color: Colors.primary800,
    fontSize: 14,
    textAlign: "center",
  },
});
