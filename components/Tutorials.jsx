import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../app/styles/colors";
import { TitleSection } from "./TitleSection";
import GlobalStyles from "../app/styles/global-styles";

const tutorialsData = [
  { id: "1", title: "Aquecimento", duration: "5 min", image: require("../assets/images/aquecimento.png") },
  { id: "2", title: "Corridas", duration: "8 min", image: require("../assets/images/corrida.png") },
  { id: "3", title: "Musculação", duration: "4 min", image: require("../assets/images/musculacao.png") },
  { id: "4", title: "Basquete", duration: "3 min", image: require("../assets/images/basquete.png") },
  { id: "5", title: "Volei", duration: "6 min", image: require("../assets/images/volei.png") },
  { id: "6", title: "Futebol", duration: "4 min", image: require("../assets/images/futebol.png") },
];

export function TutorialsSection() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      {item.image && (
        <Image
          source={item.image}
          style={styles.cardImage}
          resizeMode="cover"
        />
      )}
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardSubtitle}>{item.duration}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TitleSection title="Tutoriais" />
      <Text style={GlobalStyles.subtitle}>
        Aprenda técnicas, treinos e dicas para melhorar seu desempenho e manter
        a motivação nos esportes.
      </Text>
      <FlatList
        data={tutorialsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  listContent: {
    paddingRight: 16,
  },
  card: {
    width: 110,
    backgroundColor: Colors.neutral50,
    borderRadius: 12,
    marginRight: 12,
    padding: 8,
  },
  cardImage: {
    width: "100%",
    height: 80,
    borderRadius: 10,
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 13,
    textAlign: "center",
    fontFamily: "MontserratSemiBold", 
    color: Colors.primary800,
  },
  cardSubtitle: {
    fontSize: 11,
    color: "#666",
    textAlign: "center",
  },
});
