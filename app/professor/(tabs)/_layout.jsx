import { useState } from "react";
import { useRouter, Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HeaderBar } from "../../../components/HeaderBar";
import Colors from "../../styles/colors";
import { FloatingChatButton } from "../../../components/FloatingChatButton";
import { ScrollView, StyleSheet, View } from "react-native";
import MenuItem from "../../../components/MenuItem";
import { Feather } from "@expo/vector-icons";

export default function TabLayout() {
  const [showSettings, setShowSettings] = useState(false);
  const router = useRouter();
  

  return (
    <>
      <Tabs
        screenListeners={{
          tabPress: () => setShowSettings(false), // 👈 fecha o painel ao trocar de aba
        }}
        screenOptions={{
          header: () => (
            <HeaderBar onPressSettings={() => setShowSettings(!showSettings)} />
          ),
          tabBarActiveTintColor: Colors.primary500,
          tabBarInactiveTintColor: Colors.neutral900,
          tabBarStyle: {
            backgroundColor: Colors.neutral100,
            height: 70,
          },
          tabBarLabelStyle: {
            fontFamily: "MontserratSemiBold",
            fontSize: 12,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Inicio",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="ranking"
          options={{
            title: "Ranking",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "trophy-sharp" : "trophy-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="turmas"
          options={{
            title: "Turmas",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "people-sharp" : "people-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Perfil",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "person-sharp" : "person-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
      </Tabs>

      {/* Painel de Configurações abaixo do header */}
      {showSettings && (
  <View style={styles.panel}>
    <ScrollView contentContainerStyle={styles.menuList}>
      <MenuItem
        icon={<Feather name="user" size={20} color="#016DAD" />}
        text="Meu Perfil"
      />
      <MenuItem
        icon={<Feather name="book-open" size={20} color="#016DAD" />}
        text="Minhas Turmas"
      />
      <MenuItem
        icon={<Feather name="users" size={20} color="#016DAD" />}
        text="Gerenciar Alunos"
      />
      <MenuItem
        icon={<Feather name="clipboard" size={20} color="#016DAD" />}
        text="Lançar Pontos"
      />
      <MenuItem
        icon={<Feather name="bar-chart-2" size={20} color="#016DAD" />}
        text="Relatórios & Desempenho"
      />
      <MenuItem
        icon={<Feather name="award" size={20} color="#016DAD" />}
        text="Ranking da Turma"
      />
      <MenuItem
        icon={<Feather name="file-text" size={20} color="#016DAD" />}
        text="Regras & Pontuação"
      />
      <MenuItem
        icon={<Feather name="message-circle" size={20} color="#016DAD" />}
        text="Ajuda & Suporte"
      />
      <MenuItem
        icon={<Feather name="log-out" size={20} color="#016DAD" />}
        text="Sair"
        onPress={() => router.push("/")}
      />
    </ScrollView>
  </View>
)}


      {/* Botão flutuante do chat */}
      <FloatingChatButton />
    </>
  );
}

const styles = StyleSheet.create({
  panel: {
    position: "absolute",
    top: 116, // logo abaixo do HeaderBar
    left: -10,
    right: -10,
    bottom: 70, // acima do tab bar
    backgroundColor: "#fff",
    zIndex: 1000,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  menuList: {
    padding: 16,
  },
});
