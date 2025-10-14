import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Typography from "../../styles/typography";

export default function RankingProfessor() {
  const [filtro, setFiltro] = useState("geral");

  const alunos = [
    { id: 1, posicao: 1, nome: "Liana Silva", turma: "9º A", nivel: "Ouro", pontosAula: 1500, pontosSaude: 800, pontosPresenca: 550, foto: "👤" },
    { id: 2, posicao: 2, nome: "Aiimé Mariana", turma: "8º B", nivel: "Ouro", pontosAula: 1400, pontosSaude: 920, pontosPresenca: 400, foto: "👤" },
    { id: 3, posicao: 3, nome: "Renata Akemi", turma: "9º A", nivel: "Prata", pontosAula: 1350, pontosSaude: 750, pontosPresenca: 550, foto: "👤" },
    { id: 4, posicao: 4, nome: "Ana Oliveira", turma: "7º C", nivel: "Prata", pontosAula: 1200, pontosSaude: 880, pontosPresenca: 400, foto: "👤" },
    { id: 5, posicao: 5, nome: "Carlos Santos", turma: "8º B", nivel: "Bronze", pontosAula: 1100, pontosSaude: 650, pontosPresenca: 350, foto: "👤" },
    { id: 6, posicao: 6, nome: "Beatriz Costa", turma: "9º A", nivel: "Bronze", pontosAula: 1050, pontosSaude: 720, pontosPresenca: 300, foto: "👤" },
  ];

  const pontosTotal = (aluno) => aluno.pontosAula + aluno.pontosSaude + aluno.pontosPresenca;

  const getNivelColor = (nivel) => {
    switch (nivel) {
      case "Ouro": return { backgroundColor: "#fef3c7", color: "#b45309", borderColor: "#fde68a" };
      case "Prata": return { backgroundColor: "#d3d9e4cc", color: "#374151", borderColor: "#d1d5db" };
      case "Bronze": return { backgroundColor: "#ffedd5", color: "#b45309", borderColor: "#fdba74" };
      default: return { backgroundColor: "#dbeafe", color: "#1e3a8a", borderColor: "#93c5fd" };
    }
  };

  const getCardColor = (posicao) => {
    switch (posicao) {
      case 1: return { backgroundColor: "#f9fafb", borderColor: "#f9fafb" };
      case 2: return { backgroundColor: "#f9fafb", borderColor: "#f9fafb" };
      case 3: return { backgroundColor: "#f9fafb", borderColor: "#f9fafb" };
      default: return { backgroundColor: "#f9fafb", borderColor: "#f9fafb" };
    }
  };

  const getMedalEmoji = (posicao) => {
    switch (posicao) {
      case 1: return "🥇";
      case 2: return "🥈";
      case 3: return "🥉";
      default: return posicao.toString();
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.headerTitle}>Classificação Completa</Text>
            <Text style={styles.headerSubtitle}>Rankings atualizados</Text>
          </View>
          <View style={styles.headerIcon}>
            <MaterialCommunityIcons name="trending-up" size={24} color="#fff" />
          </View>
        </View>

        {/* Filtros */}
        <View style={styles.filtros}>
          {["geral", "turma", "mes"].map((f, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => setFiltro(f)}
              style={[
                styles.filtroButton,
                filtro === f ? { backgroundColor: "#fff" } : { backgroundColor: "rgba(255,255,255,0.2)" },
              ]}
            >
              <Text style={[styles.filtroText, filtro === f && { color: "#2563eb" }]}>
                {f === "geral" ? "Geral" : f === "turma" ? "Por Turma" : "Mês Atual"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Ranking Cards */}
      <View style={styles.cardsStack}>
        {alunos.map((aluno) => {
          const nivelStyle = getNivelColor(aluno.nivel);
          const cardStyle = getCardColor(aluno.posicao);
          return (
            <View key={aluno.id} style={[styles.card, cardStyle]}>
              <View style={styles.cardRow}>
                {/* Posição/Medalha */}
                <View style={styles.posicao}>
                  <Text style={styles.medalEmoji}>{getMedalEmoji(aluno.posicao)}</Text>
                </View>

                {/* Foto */}
                <View style={styles.foto}>
                  <Text style={{ fontSize: 22 }}>{aluno.foto}</Text>
                </View>

                {/* Info */}
                <View style={styles.info}>
                  <Text style={styles.nome}>{aluno.nome}</Text>
                  <View style={styles.nivelRow}>
                    <View style={[styles.nivelBadge, { backgroundColor: nivelStyle.backgroundColor, borderColor: nivelStyle.borderColor }]}>
                      <Text style={{ fontSize: 12, color: nivelStyle.color, fontFamily: Typography.semibold }}>{aluno.nivel}</Text>
                    </View>
                    <Text style={styles.turma}>{aluno.turma}</Text>
                  </View>
                </View>

                {/* Pontos Totais */}
                <View style={styles.pontosTotais}>
                  <Text style={styles.pontosTotalText}>{pontosTotal(aluno)}</Text>
                  <Text style={styles.pontosLabel}>pontos totais</Text>
                </View>
              </View>

              {/* Detalhamento Pontos */}
              <View style={styles.pontosDetalhe}>
                <View style={[styles.pontosCard, { backgroundColor: "#d5e9f6ff", borderColor: "#d5e9f6ff" }]}>
                  <Text style={[styles.pontosTitulo,{ color: "#5c5c5cff" } ]}>Aula</Text>
                  <Text style={[styles.pontosNumero,  { color: "#1D4ED8" }]}>{aluno.pontosAula}</Text>
                </View>
                <View style={[styles.pontosCard, { backgroundColor: "#d1f1e1ff", borderColor: "#A7F3D0" }]}>
                  <Text style={[styles.pontosTitulo, { color: "#5c5c5cff" }]}>Saúde</Text>
                  <Text style={[styles.pontosNumero, { color: "#0c983fff" }]}>{aluno.pontosSaude}</Text>
                </View>
                <View style={[styles.pontosCard, { backgroundColor: "#f4e0d8ff", borderColor: "#f4e0d8ff" }]}>
                  <Text style={[styles.pontosTitulo, { color: "#5c5c5cff" }]}>Presença</Text>
                  <Text style={[styles.pontosNumero, { color: "#FA4900" }]}>{aluno.pontosPresenca}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: 
  { 
    flex: 1, 
    backgroundColor: "#EDEFF7", 
    padding: 20 
  },

  header: 
  { 
    backgroundColor: "#3571d2ff", 
    padding: 16, 
    borderRadius: 24, 
    marginBottom: 20 
  },

  headerTop: 
  { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center" 
  },

  headerTitle: 
  { 
    fontSize: 20, 
    color: "#fff", 
    fontFamily: Typography.semibold 
  },

  headerSubtitle: 
  { 
    fontSize: 14, 
    color: "#e0f2fe", 
    marginTop: 2, 
    fontFamily: Typography.regular 
  },

  headerIcon: 
  { 
    width: 48, 
    height: 48, 
    backgroundColor: "rgba(255,255,255,0.2)", 
    borderRadius: 12, 
    justifyContent: "center", 
    alignItems: "center" 
  },

  filtros: 
  { 
    flexDirection: "row", 
    marginTop: 16, 
    gap: 8 
  },

  filtroButton: 
  { 
    paddingVertical: 6, 
    paddingHorizontal: 12, 
    borderRadius: 12 
  },

  filtroText: 
  { 
    fontSize: 12, 
    color: "#fff", 
    fontFamily: Typography.semibold 
  },

  cardsStack: 
  { 
    marginBottom: 80 
  },

  card: 
  { 
    borderWidth: 2, 
    borderRadius: 16, 
    padding: 12, 
    marginBottom: 16 
  },

  cardRow: 
  { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 8 
  },

  posicao: 
  { 
    width: 36, 
    justifyContent: "center", 
    alignItems: "center" 
  },

  medalEmoji: 
  { 
    fontSize: 20 
  },

  foto: 
  { 
    width: 44, 
    height: 44, 
    borderRadius: 22, 
    backgroundColor: "#dbeafe", 
    justifyContent: "center", 
    alignItems: "center", 
    marginHorizontal: 8 
  },

  info: 
  { 
    flex: 1 
  },

  nome: 
  { 
    fontSize: 16, 
    fontFamily: Typography.semibold, 
    color: "#1e293b" 
  },

  nivelRow: 
  { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 6 
  },

  nivelBadge: 
  { 
    paddingVertical: 2, 
    paddingHorizontal: 6, 
    borderRadius: 12, 
    borderWidth: 1 
  },

  turma: 
  { 
    fontSize: 12, 
    color: "#6b7280", 
    fontFamily: Typography.regular 
  },

  pontosTotais: 
  { 
    alignItems: "flex-end" 
  },

  pontosTotalText: 
  { 
    fontSize: 18, 
    fontFamily: Typography.semibold, 
    color: "#1c61d1ff" 
  },

  pontosLabel: 
  { 
    fontSize: 10, 
    color: "#6b7280", 
    fontFamily: Typography.regular 
  },

  pontosDetalhe: 
  { 
    flexDirection: "row", 
    justifyContent: "space-between" 
  },

  pontosCard: 
  { 
    flex: 1, 
    borderWidth: 1, 
    borderRadius: 12, 
    padding: 6, 
    marginHorizontal: 2, 
    alignItems: "center" 
  },

  pontosTitulo: 
  { 
    fontSize: 12, 
    fontFamily: Typography.bold, 
    marginBottom: 2, 
    color: "#2563eb" 
  },

  pontosNumero: 
  { 
    fontSize: 14, 
    fontFamily: Typography.semibold, 
    color: "#1e3a8a" 
  },
});
