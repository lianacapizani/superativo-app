import { View, Text, StyleSheet } from "react-native";
import Colors from "../app/styles/colors";

function formatOrdinal(num) {
  return `${num}º`;
}

export default function RankingItem({ posicao, nome, pontos }) {
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.neutral50,
    padding: 6,
    borderRadius: 10,
    marginBottom: 8,
  },
  posicao: {
    fontSize: 15,
    fontFamily: "MontserratBold", 
    color: Colors.primary750,
    width: 30,
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
    fontSize: 15,
    color: Colors.primary900,
    // usa MontserratRegular (default)
  },
  pontos: {
    fontSize: 12,
    fontFamily: "MontserratSemiBold", 
    color: Colors.secondary900,
  },
});
