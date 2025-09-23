import { Stack } from "expo-router";
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

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    MontserratThin: Montserrat_100Thin,
    MontserratLight: Montserrat_300Light,
    MontserratRegular: Montserrat_400Regular,
    MontserratMedium: Montserrat_500Medium,
    MontserratSemiBold: Montserrat_600SemiBold,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>; // pode trocar por splash bonito
  }

  // 👉 Aqui definimos fonte global para TODOS os <Text>
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.style = { fontFamily: "MontserratRegular" };

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
