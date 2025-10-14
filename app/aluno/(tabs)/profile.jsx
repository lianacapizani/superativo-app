import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, View, StyleSheet } from "react-native";
import MenuItem from "../../../components/MenuItem";

export default function AlunoProfile() {
  const router = useRouter();

  return (
    <View style={styles.container}>
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
        <MenuItem
          icon={<Feather name="log-out" size={20} color="#016DAD" />}
          text="Sair"
          onPress={() => router.push("/")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  menuList: {
    paddingBottom: 24,
  },
});
