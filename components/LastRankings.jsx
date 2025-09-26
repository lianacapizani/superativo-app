import { View, Text, FlatList, StyleSheet } from "react-native";
import Colors from "../app/styles/colors";
import { TitleSection } from "./TitleSection";

// Componente para renderizar cada item do ranking
function RankingItem({ posicao, nome, pontos }) {
  const formatOrdinal = (num) => `${num}º`;

  const getPosicaoStyle = () => {
    switch (posicao) {
      case 1:
        return [styles.posicao, styles.ouro];
      case 2:
        return [styles.posicao, styles.prata];
      case 3:
        return [styles.posicao, styles.bronze];
      default:
        return styles.posicao;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={getPosicaoStyle()}>{formatOrdinal(posicao)}</Text>
      <View style={styles.info}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.pontos}>{pontos} pts</Text>
      </View>
    </View>
  );
}

const generalRanking = [
  { id: "1", nome: "Ana Clara", pontos: 980 },
  { id: "2", nome: "João Pedro", pontos: 920 },
  { id: "3", nome: "Mariana Silva", pontos: 880 },
];

const myClassRanking = [
  { id: "1", nome: "Lucas Santos", pontos: 860 },
  { id: "2", nome: "Camila Ferreira", pontos: 800 },
  { id: "3", nome: "Thiago Ramos", pontos: 570 },
];

function RankingList({ title, data }) {
  return (
    <View style={{ marginVertical: 4 }}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <RankingItem
            posicao={index + 1}
            nome={item.nome}
            pontos={item.pontos}
          />
        )}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </View>
  );
}

export function LastRankingsSection() {
  return (
    <View>
      <TitleSection title="Últimos Rankings" />
      <RankingList title="Geral" data={generalRanking} />
      <RankingList title="Minha Turma" data={myClassRanking} />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
    fontFamily: "MontserratBold",
    marginBottom: 8,
    color: Colors.neutral900,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.neutral50,
    padding: 6,
    borderRadius: 10,
    marginBottom: 8,
  },
  posicao: {
    fontSize: 14,
    fontFamily: "MontserratBold",
    color: Colors.primary750,
    width: 25,
    textAlign: "center",
    borderRadius: 50,
    overflow: "hidden",
    paddingVertical: 4,
  },
  ouro: {
    backgroundColor: "#f2cb06ff",
    color: "#fff",
  },
  prata: {
    backgroundColor: "#b1b1b1ff",
    color: "#fff",
  },
  bronze: {
    backgroundColor: "#c06f1eff",
    color: "#fff",
  },
  info: {
    marginLeft: 12,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nome: {
    fontFamily: "MontserratMedium",
    fontSize: 15,
    color: Colors.primary900,
  },
  pontos: {
    fontSize: 12,
    fontFamily: "MontserratSemiBold",
    color: Colors.secondary900,
  },
});
