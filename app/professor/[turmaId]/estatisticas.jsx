import React from "react";
import { useLocalSearchParams, router } from "expo-router";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Typography from "../../styles/typography";

export default function EstatisticasTurma() {
  const { turmaId } = useLocalSearchParams();
  const turmaIdNum = Number(turmaId);

  // Exemplo de turmas e dados
  const turmas = [
    { id: 1, nome: "9º Ano A", cor: "#2957A3" },
    { id: 2, nome: "8º Ano B", cor: "#4b3fc9ff" },
    { id: 3, nome: "7º Ano C", cor: "#2f9c79ff" },
  ];

  const turma = turmas.find((t) => t.id === turmaIdNum) || turmas[0];

  // Dados fictícios de estatísticas
  const estatisticas = {
    totalAlunos: 30,
    presentes: 25,
    mediaPontos: 1450,
    frequencia: 83,
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#EDEFF7" }}>
      {/* HEADER */}
      <View style={[styles.header, { backgroundColor: turma.cor }]}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => router.push("/professor/turmas")}>
            <Ionicons name="arrow-back" size={22} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{turma.nome} - Estatísticas</Text>
          <View style={[styles.headerIcon, { backgroundColor: "#2957A3" }]}>
            <MaterialCommunityIcons name="chart-bar" size={22} color="white" />
          </View>
        </View>

        <View style={styles.stats}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Presentes</Text>
            <Text style={styles.statValue}>
              {estatisticas.presentes}/{estatisticas.totalAlunos}
            </Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Média Pontos</Text>
            <Text style={styles.statValue}>{estatisticas.mediaPontos}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Frequência</Text>
            <Text style={styles.statValue}>{estatisticas.frequencia}%</Text>
          </View>
        </View>
      </View>

      {/* CONTEÚDO */}
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={{ fontFamily: Typography.semibold, fontSize: 16 }}>
          Aqui você pode adicionar gráficos, tabelas ou detalhes das estatísticas da turma.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 16,
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
});
