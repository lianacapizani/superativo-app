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

const noticias = [
  {
    id: "1",
    titulo: "Esportes nas escolas melhoram desempenho",
    descricao:
      "Alunos que participam de esportes escolares apresentam melhor desempenho acadêmico e maior engajamento.",
    categoria: "Educação",
    visualizacoes: "1k",
    imagem: require("../assets/images/noticia1.jpg"),
  },
  {
    id: "2",
    titulo: "Torneio escolar de futebol agita a cidade",
    descricao:
      "O torneio incentiva espírito esportivo, trabalho em equipe e integração entre escolas participantes.",
    categoria: "Esportes",
    visualizacoes: "1.7k",
    imagem: require("../assets/images/noticia2.jpg"),
  },
  {
    id: "3",
    titulo: "Aulas de esportes melhoram saúde mental",
    descricao:
      "Praticar esportes regularmente ajuda a reduzir o estresse, aumentar a autoestima e desenvolver habilidades sociais.",
    categoria: "Saúde",
    visualizacoes: "1.1k",
    imagem: require("../assets/images/noticia3.jpg"),
  },
];

export function NewsSection() {
  return (
    <View style={styles.container}>
      <TitleSection title="Notícias" />
      <FlatList
        data={noticias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.imagem} style={styles.image} />
            <View style={styles.info}>
              <Text
                style={styles.headline}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.titulo}
              </Text>
              <Text
                style={styles.descricao}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {item.descricao}
              </Text>
              <View style={styles.meta}>
                <Text style={styles.categoria}>{item.categoria}</Text>
                <Text style={styles.views}>
                  {item.visualizacoes} visualizações
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={styles.verMaisLink}>Ver mais</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: "#ddd",
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  headline: {
    fontSize: 16,
    fontFamily: "MontserratSemiBold", // sobrescreve o default
  },
  descricao: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
    // usa MontserratRegular automaticamente (default)
  },
  meta: {
    flexDirection: "row",
    marginTop: 6,
  },
  categoria: {
    marginRight: 12,
    color: Colors.secondary900,
    fontFamily: "MontserratSemiBold",
  },
  views: {
    color: "#454545ff",
    // já vem MontserratRegular
  },
  verMaisLink: {
    fontSize: 11,
    color: "#003166ff",
    textDecorationLine: "underline",
    marginLeft: 2,
    fontFamily: "MontserratLight",
  },
});
