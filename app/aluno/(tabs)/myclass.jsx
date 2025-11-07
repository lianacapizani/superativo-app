import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import Colors from "../../styles/colors";
import GlobalStyles from "../../styles/global-styles";
import Typography from "../../styles/typography";

const turmaResumo = [
  { id: "1", label: "Total de alunos", valor: "25" },
  { id: "2", label: "Pontuação média", valor: "860 pts" },
  { id: "3", label: "Presença média", valor: "92%" },
];

const rankingTurma = [
  { id: "1", nome: "Maria Oliveira", pontos: 1200 },
  { id: "2", nome: "João Souza", pontos: 1180 },
  { id: "3", nome: "Ana Clara", pontos: 1130 },
];


const atividades = [
  { id: "1", titulo: "Aula de Educação Física", data: "08/11 - 10h" },
  { id: "2", titulo: "Desafio de Saúde", data: "10/11 - 09h" },
  { id: "3", titulo: "Apresentação de Projeto", data: "15/11 - 14h" },
];

const recados = [
  { id: "1", autor: "Prof. Ricardo", texto: "Parabéns pelo esforço na última atividade! 👏" },
  { id: "2", autor: "Prof. Ricardo", texto: "Não esqueçam de trazer garrafinha de água amanhã 💧" },
  { id: "3", autor: "Maria Oliveira", texto: "Quem topa revisar juntos o desafio de sexta?" },
];

export default function TurmaScreen() {
  return (
    <ScrollView style={GlobalStyles.container}>
      {/* HERO */}
      <View style={styles.hero}>
        <Image
          source={require("../../../assets/images/turma.png")}
          style={styles.heroImage}
        />
        <View style={styles.heroTextContainer}>
          <Text style={GlobalStyles.title}>Turma 8ºA</Text>
          <Text style={styles.subtitle}>
            Acompanhe o desempenho da galera e fique por dentro de tudo.
          </Text>
        </View>
      </View>

      {/* RESUMO DA TURMA */}
      <View style={styles.resumoContainer}>
        {turmaResumo.map((item) => (
          <View key={item.id} style={styles.cardResumo}>
            <Text style={styles.resumoValor}>{item.valor}</Text>
            <Text style={styles.resumoLabel}>{item.label}</Text>
          </View>
        ))}
      </View>

      {/* TOP 3 */}
      <Text style={styles.sectionTitle}>🏅 Top 3 da turma</Text>
      <View style={styles.topContainer}>
        {rankingTurma.map((item, index) => (
          <View key={item.id} style={styles.topCard}>
            <Text style={styles.topPosicao}>{index + 1}º</Text>
            <Text style={styles.topNome}>{item.nome}</Text>
            <Text style={styles.topPontos}>{item.pontos} pts</Text>
          </View>
        ))}
      </View>


      {/* PRÓXIMAS ATIVIDADES */}
      <Text style={styles.sectionTitle}>🗓️ Próximas atividades</Text>
      {atividades.map((item) => (
        <View key={item.id} style={styles.atividadeCard}>
          <Text style={styles.atividadeTitulo}>{item.titulo}</Text>
          <Text style={styles.atividadeData}>{item.data}</Text>
        </View>
      ))}

      {/* MURAL DE RECADOS */}
      <Text style={styles.sectionTitle}>💬 Mural da turma</Text>
      {recados.map((item) => (
        <View key={item.id} style={styles.recadoCard}>
          <Text style={styles.recadoAutor}>{item.autor}</Text>
          <Text style={styles.recadoTexto}>{item.texto}</Text>
        </View>
      ))}
    </ScrollView>
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
  resumoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 24,
  },
  cardResumo: {
    alignItems: "center",
  },
  resumoValor: {
    fontSize: 18,
    fontFamily: Typography.bold,
    color: Colors.primary900,
  },
  resumoLabel: {
    fontSize: 12,
    fontFamily: Typography.regular,
    color: Colors.neutral700,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: Typography.bold,
    marginLeft: 16,
    marginTop: 24,
    marginBottom: 10,
    color: Colors.primary900,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 16,
  },
  topCard: {
    alignItems: "center",
    backgroundColor: Colors.neutral100,
    padding: 12,
    borderRadius: 12,
    width: 100,
  },
  topPosicao: {
    fontSize: 18,
    fontFamily: Typography.bold,
    color: Colors.primary750,
  },
  topNome: {
    fontSize: 13,
    textAlign: "center",
    fontFamily: Typography.medium,
    color: Colors.primary900,
  },
  topPontos: {
    fontSize: 12,
    fontFamily: Typography.regular,
    color: Colors.neutral700,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.neutral50,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  nome: {
    marginLeft: 8,
    fontFamily: Typography.medium,
    fontSize: 15,
    color: Colors.primary900,
  },
  pontos: {
    fontFamily: Typography.bold,
    fontSize: 14,
    color: Colors.primary750,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  atividadeCard: {
    backgroundColor: Colors.neutral100,
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  atividadeTitulo: {
    fontFamily: Typography.medium,
    fontSize: 14,
    color: Colors.primary900,
  },
  atividadeData: {
    fontFamily: Typography.regular,
    fontSize: 12,
    color: Colors.neutral700,
  },
  recadoCard: {
    backgroundColor: Colors.neutral50,
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  recadoAutor: {
    fontFamily: Typography.bold,
    color: Colors.primary750,
    fontSize: 13,
  },
  recadoTexto: {
    fontFamily: Typography.regular,
    color: Colors.primary900,
    fontSize: 13,
    marginTop: 4,
  },
});
