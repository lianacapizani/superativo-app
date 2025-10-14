import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import Typography from "../../styles/typography";

export default function ProfessorHome() {
  const professorName = "Prof. João Silva";

  const acoesRapidas = [
    { icon: MaterialCommunityIcons, name: "clipboard-check", label: "Marcar Presença", color: "#306ac7ff", onPress: () => console.log("Marcar Presença") },
    { icon: Ionicons, name: "trophy", label: "Adicionar Pontos", color: "#16a34a", onPress: () => console.log("Adicionar Pontos") },
    { icon: Ionicons, name: "calendar", label: "Agendar Aula", color: "#9333ea", onPress: () => console.log("Agendar Aula") },
    { icon: Feather, name: "file-text", label: "Criar Relatório", color: "#f97316", onPress: () => console.log("Criar Relatório") },
  ];

  const proximasAulas = [
    { horario: "08:00", turma: "9º A", tema: "Futebol - Fundamentos", status: "Próxima" },
    { horario: "09:30", turma: "8º B", tema: "Vôlei - Saque", status: "Agendada" },
    { horario: "11:00", turma: "7º C", tema: "Basquete - Drible", status: "Agendada" },
  ];

  const turmasRecentes = [
    { id: 1, nome: "9º A", alunos: 28, presenca: 96 },
    { id: 2, nome: "8º B", alunos: 25, presenca: 92 },
    { id: 3, nome: "7º C", alunos: 30, presenca: 100 },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Olá, {professorName}</Text>
      <Text style={styles.subtitle}>Bem-vindo ao seu painel de desempenho</Text>

      {/* Estatísticas */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Ionicons name="people" size={28} color="#306ac7ff" />
          <Text style={styles.cardText}>Meus Alunos</Text>
          <Text style={styles.cardNumber}>32</Text>
        </View>
        <View style={styles.card}>
          <MaterialCommunityIcons name="calendar-clock" size={28} color="#16a34a" />
          <Text style={styles.cardText}>Próxima Atividade</Text>
          <Text style={styles.cardNumber}>15/10</Text>
        </View>
        <View style={styles.card}>
          <Feather name="bar-chart-2" size={28} color="#9333ea" />
          <Text style={styles.cardText}>Engajamento</Text>
          <Text style={styles.cardNumber}>87%</Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="checkmark-done" size={28} color="#FA4900" />
          <Text style={styles.cardText}>Atividades Corrigidas</Text>
          <Text style={styles.cardNumber}>21</Text>
        </View>
      </View>

      {/* Ações Rápidas */}
      <Text style={styles.sectionTitle}>Ações Rápidas</Text>
      <View style={styles.acoesContainer}>
        {acoesRapidas.map((acao, index) => {
          const Icon = acao.icon;
          return (
            <TouchableOpacity
              key={index}
              style={[styles.acaoCard, { backgroundColor: acao.color }]}
              onPress={acao.onPress}
            >
              <Icon name={acao.name} size={28} color="#fff" />
              <Text style={styles.acaoLabel}>{acao.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Próximas Aulas */}
      <Text style={styles.sectionTitle}>Próximas Aulas</Text>
      <View style={styles.cardsStack}>
        {proximasAulas.map((aula, index) => (
          <View key={index} style={styles.fullCard}>
            <View style={styles.cardRow}>
              <View>
                <Text style={[styles.cardText, { fontFamily: Typography.semibold }]}>{aula.turma}</Text>
                <Text style={[styles.cardText, { fontSize: 12 }]}>{aula.tema}</Text>
                <Text style={[styles.cardText, { fontSize: 12, color: "#64748b" }]}>{aula.horario}</Text>
              </View>
              <View style={[
                styles.statusBadge,
                { backgroundColor: aula.status === "Próxima" ? "#d1fae5" : "#dbebff" }
              ]}>
                <Text style={{ fontSize: 12, color: aula.status === "Próxima" ? "#16a34a" : "#2563eb" }}>
                  {aula.status}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Turmas Recentes */}
      <Text style={styles.sectionTitle}>Minhas Turmas</Text>
      <View style={styles.cardsStack}>
        {turmasRecentes.map((turma) => (
          <TouchableOpacity
            key={turma.id}
            style={styles.fullCard}
            onPress={() => console.log(`Abrir turma ${turma.nome}`)}
          >
            <View style={styles.cardRow}>
              <View>
                <Text style={[styles.cardText, { fontFamily: Typography.semibold }]}>{turma.nome}</Text>
                <Text style={[styles.cardText, { fontSize: 12 }]}>{turma.alunos} alunos</Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={[styles.cardText, { fontFamily: Typography.semibold }]}>{turma.presenca}%</Text>
                <Text style={[styles.cardText, { fontSize: 12, color: "#7fa2d3ff" }]}>Presença média</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Últimos Relatórios */}
      <Text style={styles.sectionTitle}>Últimos Relatórios</Text>
      <View style={styles.reportBox}>
        <Ionicons name="document-text" size={22} color="#2563eb" />
        <Text style={styles.reportText}>
          Relatório de Desempenho - Setembro
        </Text>
      </View>
      <View style={styles.reportBox}>
        <Ionicons name="document-text" size={22} color="#2563eb" />
        <Text style={styles.reportText}>
          Progresso das Turmas - 3º Bimestre
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "hsla(228, 39%, 96%, 1.00)", 
    padding: 20 
  },
  title: { 
    fontSize: 22, 
    color: "#0f172a", 
    marginBottom: 4,
    fontFamily: Typography.semibold,
  },
  subtitle: { 
    fontSize: 14, 
    color: "#475569", 
    marginBottom: 16,
    fontFamily: Typography.regular,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    alignItems: "center",
  },
  cardText: { 
    fontSize: 12, 
    color: "#334155", 
    marginTop: 4,
    fontFamily: Typography.semibold,
  },
  cardNumber: {
    fontSize: 18,
    color: "#0f172a",
    marginTop: 4,
    fontFamily: Typography.semibold,
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 16,
    color: "#1e293b",
    fontFamily: Typography.semibold,
  },
  acoesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  acaoCard: {
    width: "48%",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  acaoLabel: {
    color: "#fff",
    marginTop: 8,
    textAlign: "center",
    fontFamily: Typography.semibold,
  },
  fullCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardsStack: {
    gap: 4,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
    reportBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  reportText: { 
    color: "#334155", 
    fontSize: 14, 
    marginLeft: 10,
    fontFamily: Typography.regular,
  },
});
