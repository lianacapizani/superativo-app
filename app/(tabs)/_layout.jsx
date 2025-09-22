import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { HeaderBar } from "../../components/HeaderBar";
import Colors from "../styles/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        header: () => <HeaderBar />, 
        tabBarActiveTintColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.neutral900,
        tabBarStyle: {
          backgroundColor: Colors.neutral100,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Página Inicial",
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
          title: "Ranking Geral",
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
        name="myclass"
        options={{
          title: "Minha Turma",
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
          title: "Meu Perfil",
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
  );
}
