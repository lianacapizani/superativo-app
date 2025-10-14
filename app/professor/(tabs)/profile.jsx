import React from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import Colors from "../../styles/colors";
import Typography from "../../styles/typography"; // importando tipografia

export default function ProfessorProfile() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Prof. João Silva</Text>
        <Text style={styles.email}>joao.silva@superativo.com</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>Disciplina:</Text>
        <Text style={styles.infoValue}>Educação Física</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>Escola:</Text>
        <Text style={styles.infoValue}>Colégio SuperAtivo</Text>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Feather name="edit-3" size={18} color="#fff" />
        <Text style={styles.editText}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => router.push("/")}
      >
        <Ionicons name="log-out-outline" size={20} color="#dc2626" />
        <Text style={styles.logoutText}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EDEFF7", padding: 20 },
  header: { alignItems: "center", marginBottom: 24 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 12 },
  name: { fontSize: 20, color: "#0f172a", fontFamily: Typography.semibold },
  email: { fontSize: 14, color: "#475569", marginTop: 2, fontFamily: Typography.regular },
  infoBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  infoLabel: { fontSize: 13, color: "#64748b", fontFamily: Typography.regular },
  infoValue: { fontSize: 16, color: "#1e293b", fontFamily: Typography.semibold },
  editButton: {
    flexDirection: "row",
    backgroundColor: Colors.primary500,
    padding: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 20,
  },
  editText: { color: "#fff", fontSize: 15, fontFamily: Typography.semibold },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 30,
  },
  logoutText: { color: "#dc2626", fontSize: 15, fontFamily: Typography.semibold },
});
