import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../styles/global-styles";
import { HeroSection } from "../../components/Hero.jsx";
import { LastRankingsSection } from "../../components/LastRankings.jsx";
import { NewsSection } from "../../components/NewsSection.jsx";
import { TutorialsSection } from "../../components/Tutorials.jsx";

export default function HomeScreen() {
  const sections = [
    { key: "hero", component: <HeroSection /> },
    { key: "rankings", component: <LastRankingsSection /> },
    { key: "tutorials", component: <TutorialsSection /> },
    { key: "news", component: <NewsSection /> },
  ];

  return (
    <View style={GlobalStyles.container}>
      <FlatList
        data={sections}
        renderItem={({ item }) => <View>{item.component}</View>}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}
