import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
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
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.loginText}>Não está logado?</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("/Login")}
    >
          <Text style={styles.loginButtonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.menuList}>
        <MenuItem
          icon={<Feather name="user" size={20} color="#016DAD" />}
          text="Meu Perfil"
          onPress={() => router.push("Perfil")}
        />
        <MenuItem
          icon={<Feather name="users" size={20} color="#016DAD" />}
          text="Minha Turma"
          onPress={() => router.push("MinhaTurma")}
        />
        <MenuItem
          icon={<Feather name="award" size={20} color="#016DAD" />}
          text="Ranking da Turma"
          onPress={() => router.push("Ranking")}
        />
        <MenuItem
          icon={<Feather name="activity" size={20} color="#016DAD" />}
          text="Pontos de Saúde"
          onPress={() => router.push("PontosSaude")}
        />
        <MenuItem
          icon={<Feather name="calendar" size={20} color="#016DAD" />}
          text="Calendário de Atividades"
          onPress={() => router.push("Calendario")}
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
          onPress={() => router.push("Cupons")}
        />
        <MenuItem
          icon={<Feather name="file-text" size={20} color="#016DAD" />}
          text="Regras & Pontuação"
          onPress={() => router.push("RegrasPontuacao")}
        />
        <MenuItem
          icon={<Feather name="message-circle" size={20} color="#016DAD" />}
          text="Ajuda & Suporte"
          onPress={() => router.push("Ajuda")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  loginBox: {
    padding: 30,
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
