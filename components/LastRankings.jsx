import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Colors from "../app/styles/colors";
import { TitleSection } from "./TitleSection";

const lastFiveRankings = [
  { id: "1", name: "João Silva", points: 250 },
  { id: "2", name: "Maria Oliveira", points: 220 },
  { id: "3", name: "Lucas Santos", points: 210 },
  { id: "4", name: "Ana Pereira", points: 200 },
  { id: "5", name: "Carlos Lima", points: 190 },
];

export function LastRankingsSection() {
  const renderItem = ({ item, index }) => (
    <View style={[styles.card, index === 0 && styles.cardTop]}>
      <Text style={styles.position}>{index + 1}</Text>
      <View style={styles.info}>
        <Text style={styles.name}>
          {item.name} - <Text style={styles.points}>{item.points} pts</Text>
        </Text>
      </View>
    </View>
  );

  {/*const navigation = useNavigation();
  const handleSeeMore = () => navigation.navigate("Rankings");*/}

  return (
    <View>
      <TitleSection title="Últimos Rankings" />
      <FlatList
        data={lastFiveRankings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.neutral100,
    padding: 4,
    marginBottom: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardTop: {
    backgroundColor: Colors.secondary50,
  },
  position: {
    fontSize: 18,
    fontWeight: "bold",
    width: 30,
    textAlign: "center",
    color: Colors.neutral900,
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.primary900,
  },
  points: {
    fontSize: 14,
    color: Colors.neutral800,
    fontWeight: 500,
  },
});
