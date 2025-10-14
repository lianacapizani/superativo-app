import React, { useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Typography from "../../styles/typography";

export default function AlunosTurma() {
  const { turmaId } = useLocalSearchParams();
  const turmaIdNum = Number(turmaId);

  const [searchTerm, setSearchTerm] = useState("");
  const [alunos, setAlunos] = useState([
    {
      id: 1,
      nome: "Liana Capizani",
      turmaId: 1,
      foto: "👤",
      pontosAula: 1500,
      pontosSaude: 800,
      pontosPresenca: 550,
      presente: true,
      posicao: 1,
      nivel: "Ouro",
    },
    {
      id: 2,
      nome: "Aiimé Mariana",
      turmaId: 1,
      foto: "👤",
      pontosAula: 1400,
      pontosSaude: 920,
      pontosPresenca: 400,
      presente: true,
      posicao: 2,
      nivel: "Ouro",
    },
    {
      id: 3,
      nome: "Renata Akemi",
      turmaId: 1,
      foto: "👤",
      pontosAula: 1350,
      pontosSaude: 750,
      pontosPresenca: 550,
      presente: true,
      posicao: 3,
      nivel: "Prata",
    },
    {
      id: 4,
      nome: "Ana Oliveira",
      turmaId: 1,
      foto: "👤",
      pontosAula: 1200,
      pontosSaude: 880,
      pontosPresenca: 400,
      presente: false,
      posicao: 4,
      nivel: "Prata",
    },
    {
      id: 5,
      nome: "Carlos Santos",
      turmaId: 1,
      foto: "👤",
      pontosAula: 1100,
      pontosSaude: 650,
      pontosPresenca: 350,
      presente: true,
      posicao: 5,
      nivel: "Bronze",
    },
    {
      id: 6,
      nome: "Beatriz Costa",
      turmaId: 1,
      foto: "👤",
      pontosAula: 1050,
      pontosSaude: 720,
      pontosPresenca: 300,
      presente: true,
      posicao: 6,
      nivel: "Bronze",
    },
    {
      id: 7,
      nome: "Lucas Tomaz",
      turmaId: 1,
      foto: "👤",
      pontosAula: 1000,
      pontosSaude: 720,
      pontosPresenca: 300,
      presente: false,
      posicao: 7,
      nivel: "Bronze",
    },
    {
      id: 8,
      nome: "Gabriel dos Santos",
      turmaId: 1,
      foto: "👤",
      pontosAula: 1000,
      pontosSaude: 720,
      pontosPresenca: 300,
      presente: true,
      posicao: 8,
      nivel: "Bronze",
    },
  ]);

  const turmas = [
    { id: 1, nome: "9º Ano A", cor: "#143d7eff" },
    { id: 2, nome: "8º Ano B", cor: "#0a46a7ff" },
    { id: 3, nome: "7º Ano C", cor: "#367ae6ff" },
  ];

  const turma = turmas.find((t) => t.id === turmaIdNum) || turmas[0];

  const alunosDaTurma = alunos.filter((a) => a.turmaId === turmaIdNum);
  const alunosFiltrados = alunosDaTurma.filter((aluno) =>
    aluno.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const togglePresenca = (id) => {
    setAlunos((prev) =>
      prev.map((aluno) =>
        aluno.id === id ? { ...aluno, presente: !aluno.presente } : aluno
      )
    );
  };

  const pontosTotal = (aluno) =>
    aluno.pontosAula + aluno.pontosSaude + aluno.pontosPresenca;

  const getNivelColor = (nivel) => {
    switch (nivel) {
      case "Ouro":
        return { backgroundColor: "#fff3b0", color: "#8b8000" };
      case "Prata":
        return { backgroundColor: "#e5e7eb", color: "#4b5563" };
      case "Bronze":
        return { backgroundColor: "#fce7d1", color: "#b45309" };
      default:
        return { backgroundColor: "#dbeafe", color: "#1d4ed8" };
    }
  };

  const handlePontos = (id, delta) => {
    setAlunos((prev) =>
      prev.map((a) =>
        a.id === id
          ? { ...a, pontosAula: Math.max(a.pontosAula + delta, 0) }
          : a
      )
    );
  };

  const marcarTodosPresentes = () => {
    setAlunos((prev) => prev.map((a) => ({ ...a, presente: true })));
  };

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

      {/* AÇÕES EM MASSA */}
      <View style={styles.massActions}>
        <TouchableOpacity
          style={[styles.massButton, { backgroundColor: "#10b981" }]}
          onPress={marcarTodosPresentes}
        >
          <Ionicons name="checkmark-circle" color="#fff" size={18} />
          <Text style={styles.massButtonText}>Marcar Todos Presentes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.massButton, { backgroundColor: "#2957A3" }]}
          onPress={() => alert("Pontos adicionados a todos!")}
        >
          <Ionicons name="add-circle" color="#fff" size={18} />
          <Text style={styles.massButtonText}>Adicionar Pontos</Text>
        </TouchableOpacity>
      </View>

      {/* LISTA DE ALUNOS */}
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 80 }}
      >
        {alunosFiltrados.map((aluno) => {
          const nivelStyle = getNivelColor(aluno.nivel);
          return (
            <View key={aluno.id} style={styles.card}>
              <View style={styles.cardRow}>
                {/* POSIÇÃO */}
                <View style={styles.posicaoBox}>
                  <Text style={styles.posicaoText}>{aluno.posicao}</Text>
                </View>

                {/* FOTO */}
                <View style={styles.fotoBox}>
                  <Text style={styles.foto}>{aluno.foto}</Text>
                </View>

                {/* NOME E PONTOS */}
                <View style={{ flex: 1 }}>
                  <Text style={styles.alunoNome}>{aluno.nome}</Text>
                  <View style={styles.alunoInfoRow}>
                    <View
                      style={[
                        styles.nivelBadge,
                        { backgroundColor: nivelStyle.backgroundColor },
                      ]}
                    >
                      <Text
                        style={[styles.nivelText, { color: nivelStyle.color }]}
                      >
                        {aluno.nivel}
                      </Text>
                    </View>
                    <Text style={styles.pontosText}>
                      {pontosTotal(aluno)} pts
                    </Text>
                  </View>
                </View>

                {/* BOTÕES DE PONTOS + PRESENÇA */}
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
                >
                  {/* BOTÕES + / - */}
                  <View style={styles.pointsButtons}>
                    <TouchableOpacity
                      onPress={() => handlePontos(aluno.id, -50)}
                      style={styles.plusMinusButton}
                    >
                      <Ionicons name="remove" size={18} color="#ef4444" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handlePontos(aluno.id, +50)}
                      style={styles.plusMinusButton}
                    >
                    <Ionicons name="add" size={18} color="#2957A3" />
                    </TouchableOpacity>
                  </View>

                  {/* BOTÃO DE PRESENÇA */}
                  <TouchableOpacity
                    style={styles.statusBox}
                    onPress={() => togglePresenca(aluno.id)}
                  >
                    {aluno.presente ? (
                      <Ionicons
                        name="checkmark-circle"
                        size={22}
                        color="#10b981"
                      />
                    ) : (
                      <Ionicons name="close-circle" size={22} color="#ef4444" />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
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
  massActions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 12,
    marginTop: 4,
    marginBottom: 16,
  },
  massButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  massButtonText: {
    color: "#fff",
    fontFamily: Typography.medium,
    fontSize: 13,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  cardRow: { flexDirection: "row", alignItems: "center" },
  posicaoBox: {
    width: 32,
    height: 32,
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  posicaoText: { fontFamily: Typography.bold, color: "#4b5563" },
  fotoBox: {
    width: 44,
    height: 44,
    backgroundColor: "#dbeafe",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  foto: { fontSize: 22 },
  alunoNome: {
    fontSize: 15,
    fontFamily: Typography.semibold,
    color: "#111827",
  },
  alunoInfoRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  nivelBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  nivelText: { fontSize: 12, fontFamily: Typography.medium },
  pontosText: {
    fontSize: 12,
    color: "#6B7280",
    fontFamily: Typography.medium,
  },
  pointsButtons: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
    gap: 4,
  },
  plusMinusButton: {
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    padding: 4,
  },
  statusBox: { marginLeft: 4 },
});
