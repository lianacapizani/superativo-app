import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import GlobalStyles from "../../styles/global-styles";
import Colors from "../../styles/colors";
import RankingItem from "../../../components/RankingItem";
import Typography from "../../styles/typography";
import { useState, useEffect } from "react";
import { buscarRanking } from "../../../services/rankingService";

export default function RankingScreen() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function carregarRanking() {
      const dados = await buscarRanking();
      setAlunos(dados);
    }
    carregarRanking();
  }, []);

  return (
    <View style={GlobalStyles.container}>
      {/* HERO */}
      <View style={styles.hero}>
        <Image
          source={require("../../../assets/images/ranking2.png")}
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
