import React, { useState, useEffect } from "react";
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
import * as LocalAuthentication from "expo-local-authentication";
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
  const [biometrySupported, setBiometrySupported] = useState(false);
  const [biometryType, setBiometryType] = useState(null);

  useEffect(() => {
    const checkBiometry = async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      const enrolled = await LocalAuthentication.isEnrolledAsync();
      setBiometrySupported(compatible && enrolled);

      if (compatible && enrolled) {
        const types = await LocalAuthentication.supportedAuthenticationTypesAsync();

        if (types.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION)) {
          setBiometryType("Face ID");
        } else if (types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)) {
          setBiometryType("Touch ID");
        }
      }
    };
    checkBiometry();
  }, []);

  const handleBiometricAuth = async () => {
    if (!biometrySupported) return;

    try {
      const promptMessage = biometryType
        ? `Autentique-se com ${biometryType}`
        : "Autentique-se";

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage,
        fallbackLabel: "Use sua senha",
      });

      if (result.success) {
        router.push("/aluno/(tabs)");
      } else {
        Alert.alert("Erro", "Autenticação biométrica falhou.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro na autenticação biométrica.");
    }
  };

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      router.push("/aluno/(tabs)");
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
        <Text style={styles.title}>Bem-vindo, Aluno!</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor={Colors.neutral500}
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

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
            <Ionicons
              name={showSenha ? "eye-off" : "eye"}
              size={24}
              color={Colors.neutral500}
            />
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

        <TouchableOpacity style={styles.button} onPress={() => router.push("/aluno/(tabs)")} >
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        {biometrySupported && (
          <TouchableOpacity
            style={[styles.button, styles.buttonBiometry]}
            onPress={handleBiometricAuth}
              activeOpacity={0.6}
          >
            <Text style={styles.buttonTextBiometry}>
              Entrar com {biometryType || "biometria"}
            </Text>
          </TouchableOpacity>
        )}

        <View>
          <Text style={styles.signup}>Não possui conta?</Text>
          <TouchableOpacity onPress={() => router.push("/SignUp")}>
            <Text style={styles.signupLink}>Cadastre-se aqui</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => router.push("/")}
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
  buttonBiometry: {
    backgroundColor: "#fff",
    borderColor: Colors.neutral300,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 14,
    fontFamily: Typography.regular,
    color: Colors.primary750,
  },
  buttonTextBiometry: {
    color:Colors.primary750,
    fontSize: 16,
    fontFamily: Typography.medium,

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
