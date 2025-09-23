import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import GlobalStyles from "../styles/global-styles";
import Colors from "../styles/colors";
import RankingItem from "../../components/RankingItem";
import Typography from "../styles/typography";

const alunos = [
  { id: "1", nome: "Ana Clara", pontos: 980 },
  { id: "2", nome: "João Pedro", pontos: 920 },
  { id: "3", nome: "Mariana Silva", pontos: 880 },
  { id: "4", nome: "Lucas Santos", pontos: 860 },
  { id: "5", nome: "Beatriz Oliveira", pontos: 850 },
  { id: "6", nome: "Rafael Almeida", pontos: 830 },
  { id: "7", nome: "Camila Ferreira", pontos: 800 },
  { id: "8", nome: "Mateus Costa", pontos: 780 },
  { id: "9", nome: "Gabriela Rocha", pontos: 760 },
  { id: "10", nome: "Felipe Lima", pontos: 740 },
];

export default function RankingScreen() {
  return (
    <View style={GlobalStyles.container}>
      {/* HERO */}
      <View style={styles.hero}>
        <Image
          source={require("../../assets/images/ranking2.png")}
          style={styles.heroImage}
        />
        <View style={styles.heroTextContainer}>
          <Text style={GlobalStyles.title}>Ranking geral</Text>
          <Text style={styles.subtitle}>
            Acompanhe os destaques e veja quem está liderando o ranking.
          </Text>
        </View>
      </View>

      {/* LISTA */}
      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <RankingItem
            posicao={index + 1}
            nome={item.nome}
            pontos={item.pontos}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.neutral100,
    padding: 16,
  },
  heroTextContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  subtitle: {
    fontFamily: Typography.regular,
    fontSize: 14,
    color: Colors.primary750,
    marginBottom: 8,
  },
  heroImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 100,
  },
  listContainer: {
    padding: 16,
  },
});
