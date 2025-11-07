import React, { useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Typography from "../../styles/typography";

export default function AlunosTurma() {
  const { turmaId } = useLocalSearchParams();
  const turmaIdNum = Number(turmaId);

  const [searchTerm, setSearchTerm] = useState("");
  const alunos = [
    { id: 1, nome: "Liana Capizani", turmaId: 1, presente: true },
    { id: 2, nome: "Aiimé Mariana", turmaId: 1, presente: true },
    { id: 3, nome: "Renata Akemi", turmaId: 1, presente: true },
    { id: 4, nome: "Ana Oliveira", turmaId: 1, presente: false },
    { id: 5, nome: "Carlos Santos", turmaId: 1, presente: true },
    { id: 6, nome: "Beatriz Costa", turmaId: 1, presente: true },
    { id: 7, nome: "Lucas Tomaz", turmaId: 1, presente: false },
    { id: 8, nome: "Gabriel dos Santos", turmaId: 1, presente: true },
  ];

  const turmas = [
    { id: 1, nome: "9º Ano A", cor: "#143d7eff" },
    { id: 2, nome: "8º Ano B", cor: "#0a46a7ff" },
    { id: 3, nome: "7º Ano C", cor: "#367ae6ff" },
  ];

  const turma = turmas.find((t) => t.id === turmaIdNum) || turmas[0];

  const alunosDaTurma = alunos.filter((a) => a.turmaId === turmaIdNum);

  const pontosTotal = (aluno) =>
    aluno.pontosAula + aluno.pontosSaude + aluno.pontosPresenca;


  return (
    <View style={{ flex: 1, backgroundColor: "#EDEFF7" }}>
      {/* HEADER */}
      <View style={[styles.header, { backgroundColor: turma.cor }]}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => router.push("/professor/turmas")}>
            <Ionicons name="arrow-back" size={22} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{turma.nome}</Text>
          <View style={[styles.headerIcon, { backgroundColor: "#2957A3" }]}>
            <MaterialCommunityIcons
              name="account-group"
              size={22}
              color="white"
            />
          </View>
        </View>

        <View style={styles.stats}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Presentes</Text>
            <Text style={styles.statValue}>
              {alunosDaTurma.filter((a) => a.presente).length}/
              {alunosDaTurma.length}
            </Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Média Pontos</Text>
            <Text style={styles.statValue}>
              {alunosDaTurma.length > 0
                ? Math.round(
                    alunosDaTurma.reduce((acc, a) => acc + pontosTotal(a), 0) /
                      alunosDaTurma.length
                  )
                : 0}
            </Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Frequência</Text>
            <Text style={styles.statValue}>
              {alunosDaTurma.length > 0
                ? Math.round(
                    (alunosDaTurma.filter((a) => a.presente).length /
                      alunosDaTurma.length) *
                      100
                  )
                : 0}
              %
            </Text>
          </View>
        </View>
      </View>

      {/* BUSCA */}
      <View style={styles.searchContainer}>
        <Feather
          name="search"
          size={20}
          color="#005af5ff"
          style={{ marginRight: 8 }}
        />
        <TextInput
          placeholder="Buscar aluno..."
          value={searchTerm}
          onChangeText={setSearchTerm}
          style={[styles.searchInput, { fontFamily: Typography.regular }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontFamily: Typography.bold,
  },
  headerIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  statBox: { alignItems: "center" },
  statLabel: {
    color: "#DBEAFE",
    fontSize: 12,
    fontFamily: Typography.regular,
  },
  statValue: {
    color: "white",
    fontSize: 16,
    fontFamily: Typography.bold,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 4,
    margin: 16,
  },
  searchInput: { flex: 1, height: 36, fontSize: 14 },
 
});
