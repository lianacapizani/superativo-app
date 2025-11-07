import { useEffect } from "react";
import { Stack, router } from "expo-router";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { Text } from "react-native";

// Ajuste global da fonte
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { fontFamily: "MontserratRegular" };

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    MontserratThin: Montserrat_100Thin,
    MontserratLight: Montserrat_300Light,
    MontserratRegular: Montserrat_400Regular,
    MontserratMedium: Montserrat_500Medium,
    MontserratSemiBold: Montserrat_600SemiBold,
    MontserratBold: Montserrat_700Bold,
  });

  // 🚀 Pré-carregamento de rotas para navegação mais rápida
  useEffect(() => {
    // Prefetch de rotas principais do app
    router.prefetch("/aluno/login");
    router.prefetch("/professor/login");
    router.prefetch("/aluno/(tabs)");
    router.prefetch("/professor/(tabs)");
    router.prefetch("/SignUp");
  }, []);

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* As rotas abaixo só funcionam se os arquivos existirem em app/ */}
      <Stack.Screen name="index" />
      <Stack.Screen name="aluno/login" />
      <Stack.Screen name="professor/login" />
      <Stack.Screen name="aluno/(tabs)" />
      <Stack.Screen name="professor/(tabs)" />
      <Stack.Screen name="SignUp" />
      <Stack.Screen name="professor/[turmaId]" />
    </Stack>
  );
}
