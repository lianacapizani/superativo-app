import React, { useState } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import Typography from "../../styles/typography";

export default function ProfessorTurmas({ navigation }) {
  const [searchTerm, setSearchTerm] = useState("");

  const turmas = [
    {
      id: 1,
      nome: "9º Ano A",
      alunos: 28,
      presencaMedia: 96,
      pontuacaoMedia: 2450,
      cor: "#143d7eff",
    },
    {
      id: 2,
      nome: "8º Ano B",
      alunos: 25,
      presencaMedia: 92,
      pontuacaoMedia: 2280,
      cor: "#0a46a7ff",
    },
    {
      id: 3,
      nome: "7º Ano C",
      alunos: 30,
      presencaMedia: 100,
      pontuacaoMedia: 2650,
      cor: "#367ae6ff",
    },
    {
      id: 4,
      nome: "9º Ano B",
      alunos: 27,
      presencaMedia: 88,
      pontuacaoMedia: 2150,
      cor: "#143d7eff",
    },
    {
      id: 5,
      nome: "8º Ano A",
      alunos: 26,
      presencaMedia: 94,
      pontuacaoMedia: 2380,
      cor: "#0a46a7ff",
    },
  ];

  const turmasFiltradas = turmas.filter((t) =>
    t.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalAlunos = turmas.reduce((acc, turma) => acc + turma.alunos, 0);
  const presencaGeral = Math.round(
    turmas.reduce((acc, turma) => acc + turma.presencaMedia, 0) / turmas.length
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#EDEFF7" }}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.headerTitle}>Minhas Turmas</Text>
            <Text style={styles.headerSubtitle}>Gerencie suas turmas</Text>
          </View>
          <View style={styles.headerIcon}>
            <MaterialCommunityIcons
              name="account-group"
              size={24}
              color="white"
            />
          </View>
        </View>

        <View style={styles.stats}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Turmas</Text>
            <Text style={styles.statValue}>{turmas.length}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Alunos</Text>
            <Text style={styles.statValue}>{totalAlunos}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Presença</Text>
            <Text style={styles.statValue}>{presencaGeral}%</Text>
          </View>
        </View>
      </View>

      {/* Conteúdo */}
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 100 }}>
        {/* Busca */}
        <View style={styles.searchContainer}>
          <Feather
            name="search"
            size={20}
            color="#005af5ff"
            style={{ marginRight: 8 }}
          />
          <TextInput
            placeholder="Buscar turma..."
            value={searchTerm}
            onChangeText={setSearchTerm}
            style={[styles.searchInput, { fontFamily: Typography.regular }]}
          />
        </View>

        {/* Lista de Turmas */}
        {turmasFiltradas.length > 0 ? (
          turmasFiltradas.map((turma) => (
            <TouchableOpacity
              key={turma.id}
              style={styles.card}
              onPress={() =>
                navigation.navigate("AlunosTurma", { turmaId: turma.id })
              }
            >
              {/* Header do Card */}
              <View style={styles.cardHeader}>
                <View
                  style={[styles.turmaCircle, { backgroundColor: turma.cor }]}
                >
                  <Text style={styles.turmaLetter}>{turma.nome.charAt(0)}</Text>
                </View>
                <View>
                  <Text style={styles.turmaName}>{turma.nome}</Text>
                  <Text style={styles.turmaSub}>{turma.alunos} alunos</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color="#9CA3AF" />
              </View>

              {/* Stats da Turma */}
              <View style={styles.cardStats}>
                <View
                  style={[styles.statItem, { backgroundColor: "#dce8f7ff" }]}
                >
                  <Text style={[styles.statLabelSmall, { color: "#5c5c5cff" }]}>
                    Presença
                  </Text>
                  <Text style={[styles.statValueSmall, { color: "#1D4ED8" }]}>
                    {turma.presencaMedia}%
                  </Text>
                </View>
                <View
                  style={[styles.statItem, { backgroundColor: "#f4e0d8ff" }]}
                >
                  <Text style={[styles.statLabelSmall, { color: "#5c5c5cff" }]}>
                    Pontuação
                  </Text>
                  <Text style={[styles.statValueSmall, { color: "#FA4900" }]}>
                    {turma.pontuacaoMedia}
                  </Text>
                </View>
                <View
                  style={[styles.statItem, { backgroundColor: "#e4e1f3ff" }]}
                >
                  <Text style={[styles.statLabelSmall, { color: "#5c5c5cff" }]}>
                    Média
                  </Text>
                  <Text style={[styles.statValueSmall, { color: "#6D28D9" }]}>
                    {Math.round(turma.pontuacaoMedia / turma.alunos)}
                  </Text>
                </View>
              </View>

              {/* Botões */}
              <View style={styles.cardButtons}>
                <TouchableOpacity
                  style={[styles.btn, { backgroundColor: "#306ac7ff" }]}
                  onPress={() =>
                    router.push(`/professor/${turma.id}`)
                  }
                >
                  <MaterialCommunityIcons
                    name="account-group"
                    size={16}
                    color="white"
                  />
                  <Text style={styles.btnText}>Ver Alunos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.btn, { backgroundColor: "#FC6E14" }]}
                  onPress={() =>
                    navigation.navigate("PresencaTurma", { turmaId: turma.id })
                  }
                >
                  <MaterialCommunityIcons
                    name="clipboard-check"
                    size={16}
                    color="white"
                  />
                  <Text style={styles.btnText}>Presença</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.btnSmall, { backgroundColor: "#9333ea" }]}
                  onPress={() =>
                    navigation.navigate("EstatisticasTurma", {
                      turmaId: turma.id,
                    })
                  }
                >
                  <Feather name="bar-chart-2" size={16} color="white" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={{ alignItems: "center", marginTop: 40 }}>
            <MaterialCommunityIcons
              name="account-group"
              size={48}
              color="#9CA3AF"
            />
            <Text
              style={{
                color: "#6B7280",
                marginTop: 8,
                fontFamily: Typography.medium,
              }}
            >
              Nenhuma turma encontrada
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 16,
    backgroundColor: "#3571d2ff",
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontFamily: Typography.bold,
  },
  headerSubtitle: {
    color: "#DBEAFE",
    fontSize: 14,
    fontFamily: Typography.medium,
  },
  headerIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#0a273833",
    justifyContent: "center",
    alignItems: "center",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
  },
  statBox: {
    padding: 8,
    alignItems: "center",
  },
  statLabel: {
    color: "#DBEAFE",
    fontSize: 12,
    fontFamily: Typography.regular,
  },
  statValue: {
    color: "white",
    fontSize: 18,
    fontFamily: Typography.bold,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 36,
    fontSize: 14,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    justifyContent: "space-between",
  },
  turmaCircle: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  turmaLetter: {
    color: "white",
    fontSize: 20,
    fontFamily: Typography.bold,
  },
  turmaName: {
    fontSize: 16,
    fontFamily: Typography.semibold,
    color: "#111827",
  },
  turmaSub: {
    fontSize: 12,
    fontFamily: Typography.light,
    color: "#6B7280",
  },
  cardStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  statItem: {
    flex: 1,
    padding: 6,
    borderRadius: 12,
    alignItems: "center",
    marginHorizontal: 2,
  },
  statLabelSmall: {
    fontSize: 12,
    fontFamily: Typography.semibold,
    marginBottom: 2,
  },
  statValueSmall: {
    fontSize: 14,
    fontFamily: Typography.bold,
  },
  cardButtons: {
    flexDirection: "row",
    marginTop: 8,
  },
  btn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 8,
    marginRight: 4,
    gap: 4,
  },
  btnSmall: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  btnText: {
    color: "white",
    fontSize: 13,
    fontFamily: Typography.semibold,
  },
});
