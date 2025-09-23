import { FlatList, View, StyleSheet} from "react-native";
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
        style={styles.homeContainer}
        data={sections}
        renderItem={({ item }) => <View>{item.component}</View>}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}


const styles = StyleSheet.create({

  homeContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  }

})