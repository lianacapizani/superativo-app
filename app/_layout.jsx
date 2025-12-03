import { useEffect } from "react";
import { Stack, router } from "expo-router";
import { InteractionManager, Text } from "react-native";
import { View, Platform, StyleSheet } from "react-native";

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

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

  useEffect(() => {
    // 🔹 Só executa o prefetch depois que a interface já está pronta
    const task = InteractionManager.runAfterInteractions(() => {
      router.prefetch("/aluno/login");
      router.prefetch("/professor/login");
      router.prefetch("/aluno/(tabs)");
      router.prefetch("/professor/(tabs)");
      router.prefetch("/SignUp");
    });

    return () => task.cancel?.();
  }, []);

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }

return (
  <View
    style={
      Platform.OS === "web"
        ? styles.mobileWrapper   // força layout de celular no web
        : { flex: 1 }            // mobile normal
    }
  >
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="aluno/login" />
      <Stack.Screen name="professor/login" />
      <Stack.Screen name="aluno/(tabs)" />
      <Stack.Screen name="professor/(tabs)" />
      <Stack.Screen name="SignUp" />
      <Stack.Screen name="professor/[turmaId]" />
    </Stack>
  </View>
);

}

const styles = StyleSheet.create({
  mobileWrapper: {
    width: 390,           // largura padrão de iPhone
    maxWidth: 390,
    margin: "0 auto",     // centraliza no web
    flex: 1,
    backgroundColor: "#fff",
  },
});
