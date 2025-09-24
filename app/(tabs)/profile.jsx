import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuItem from "../../components/MenuItem";
import Colors from "../styles/colors";

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.loginText}>Não está logado?</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginButtonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.menuList}>
        <MenuItem
          icon={<Feather name="user" size={20} color="#016DAD" />}
          text="Meu Perfil"
          onPress={() => navigation.navigate("Perfil")}
        />
        <MenuItem
          icon={<Feather name="users" size={20} color="#016DAD" />}
          text="Minha Turma"
          onPress={() => navigation.navigate("MinhaTurma")}
        />
        <MenuItem
          icon={<Feather name="award" size={20} color="#016DAD" />}
          text="Ranking da Turma"
          onPress={() => navigation.navigate("Ranking")}
        />
        <MenuItem
          icon={<Feather name="activity" size={20} color="#016DAD" />}
          text="Pontos de Saúde"
          onPress={() => navigation.navigate("PontosSaude")}
        />
        <MenuItem
          icon={<Feather name="calendar" size={20} color="#016DAD" />}
          text="Calendário de Atividades"
          onPress={() => navigation.navigate("Calendario")}
        />
        <MenuItem
          icon={
            <MaterialIcons
              name="confirmation-number"
              size={20}
              color="#016DAD"
            />
          }
          text="Cupons & Recompensas"
          onPress={() => navigation.navigate("Cupons")}
        />
        <MenuItem
          icon={<Feather name="file-text" size={20} color="#016DAD" />}
          text="Regras & Pontuação"
          onPress={() => navigation.navigate("RegrasPontuacao")}
        />
        <MenuItem
          icon={<Feather name="message-circle" size={20} color="#016DAD" />}
          text="Ajuda & Suporte"
          onPress={() => navigation.navigate("Ajuda")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  loginBox: {
    padding: 24,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },

  loginText: {
    fontSize: 16,
    marginBottom: 8,
    color: "#4E4E4E",
  },

  loginButton: {
    backgroundColor: Colors.secondary750,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  menuList: {
    paddingBottom: 24,
  },
});
