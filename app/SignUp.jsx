import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import SocialLogin from '../components/SocialLogin';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../services/firebase';
import Colors from './styles/colors';
import Typography from './styles/typography';
import { useRouter } from "expo-router";

export default function Cadastro() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);

  const handleCadastro = async () => {
    if (!nome || !sobrenome || !email || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);

      await updateProfile(userCredential.user, {
        displayName: `${nome} ${sobrenome}`,
      });

      Alert.alert('Sucesso', 'Conta criada com sucesso!');
      router.push("/Login");
    } catch (error) {
      console.error(error.code);
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Erro', 'Este e-mail já está cadastrado. Tente fazer login.');
      } else if (error.code === 'auth/weak-password') {
        Alert.alert('Erro', 'A senha deve ter no mínimo 6 caracteres.');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Erro', 'O e-mail digitado não é válido.');
      } else {
        Alert.alert('Erro', 'Erro ao criar conta. Tente novamente.');
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <ScrollView contentContainerStyle={styles.inner} keyboardShouldPersistTaps="handled">
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Cadastro</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor={Colors.neutral500}
        />

        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          value={sobrenome}
          onChangeText={setSobrenome}
          placeholderTextColor={Colors.neutral500}
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor={Colors.neutral500}
        />

        {/* Senha */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!showSenha}
            placeholderTextColor={Colors.neutral500}
          />
          <TouchableOpacity onPress={() => setShowSenha(!showSenha)}>
            <Ionicons name={showSenha ? "eye-off" : "eye"} size={24} color={Colors.neutral500} />
          </TouchableOpacity>
        </View>

        {/* Confirmar Senha */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Confirmar Senha"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry={!showConfirmarSenha}
            placeholderTextColor={Colors.neutral500}
          />
          <TouchableOpacity onPress={() => setShowConfirmarSenha(!showConfirmarSenha)}>
            <Ionicons name={showConfirmarSenha ? "eye-off" : "eye"} size={24} color={Colors.neutral500} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <SocialLogin />

        <TouchableOpacity onPress={() => router.push("/Login")}>
          <Text style={styles.signupLink}>Já possui conta? Voltar ao login</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  inner: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: 60,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontFamily: Typography.semibold,
    marginBottom: 24,
    color: Colors.primary800,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
    borderColor: Colors.neutral300,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
    fontFamily: Typography.regular,
    color: Colors.neutral900,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
    borderColor: Colors.neutral300,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  inputPassword: {
    flex: 1,
    fontFamily: Typography.regular,
    color: Colors.neutral900,
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Typography.semibold,
  },
  signupLink: {
    marginTop: 24,
    color: Colors.primary800,
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontFamily: Typography.medium,
  },
});
