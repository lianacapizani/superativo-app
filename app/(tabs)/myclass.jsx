import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import GlobalStyles from "../styles/global-styles";
import Colors from "../styles/colors";
import Typography from "../styles/typography";

const pointsData = [
  {
    id: "1",
    title: "Pontos de Aula",
    color: "rgba(222, 220, 209, 0.78)",
    transactions: [
      { id: "t1", value: +100, date: "01/01/2025" },
      { id: "t2", value: -100, date: "01/01/2025" },
    ],
  },
  {
    id: "2",
    title: "Pontos de Saúde",
    color: "#e0e7ffc7",
    transactions: [
      { id: "t3", value: +100, date: "01/01/2025" },
      { id: "t4", value: -100, date: "01/01/2025" },
    ],
  },
  {
    id: "3",
    title: "Pontos de Presença",
    color: "#fce8d9f7",
    transactions: [
      { id: "t5", value: +100, date: "01/01/2025" },
      { id: "t6", value: -100, date: "01/01/2025" },
    ],
  },
];

// Componente reutilizável para cada bloco de pontos
function PointsCard({ title, color, transactions }) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Text style={styles.cardTitle}>{title}</Text>
      {transactions.map((t) => (
        <View key={t.id} style={styles.transaction}>
          <Text style={styles.transactionText}>
            {t.value > 0 ? `+${t.value}` : t.value}
          </Text>
          <Text style={styles.transactionDate}>{t.date}</Text>
        </View>
      ))}
    </View>
  );
}

export default function MyClassScreen() {
  const total = pointsData
    .flatMap((p) => p.transactions)
    .reduce((acc, t) => acc + t.value, 0);

  return (
    <ScrollView
      style={GlobalStyles.container}
      contentContainerStyle={{ paddingBottom: 24 }}
    >
      <View style={styles.hero}>
        <Image
          source={require("../../assets/images/fulana2.png")}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <View style={styles.heroTextContainer}>
          <Text style={GlobalStyles.title}>Nome da Fulana</Text>
          <View style={styles.row}>
            <Ionicons
              name="trophy-outline"
              size={16}
              color={Colors.primary750}
            />
            <Text style={styles.subtitle}>Classificação Geral: 7º</Text>
          </View>

          <View style={styles.row}>
            <Ionicons
              name="people-outline"
              size={16}
              color={Colors.primary750}
            />
            <Text style={styles.subtitle}>Turma X</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Meu balanço de pontos</Text>
      {pointsData.map((p) => (
        <PointsCard
          key={p.id}
          title={p.title}
          color={p.color}
          transactions={p.transactions}
        />
      ))}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: {total}</Text>
      </View>

      <Text style={styles.sectionTitle}>Calendário</Text>
      <Calendar
        style={styles.calendar}
        theme={{
          todayTextColor: Colors.primary750,
          arrowColor: Colors.primary750,
          monthTextColor: Colors.primary900,
          textDayFontFamily: Typography.regular,
          textMonthFontFamily: Typography.bold,
          textDayHeaderFontFamily: Typography.bold,
        }}
        onDayPress={(day) => {
          console.log("Dia selecionado:", day);
        }}
      />

      <View style={styles.syncCard}>
        <Text style={styles.cardTitle}>Sincronize seus dispositivos</Text>
        <Text style={styles.syncSubtitle}>
          Aqui você pode sincronizar suas atividades registradas em outros
          aplicativos que monitoram seus exercícios.
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 16,
          }}
        >
          <View style={{ flex: 1, marginRight: 8 }}>
            <Text
              style={GlobalStyles.buttonPrimary}
              onPress={() => console.log("Ver Dispositivos")}
            >
              <Text style={GlobalStyles.buttonPrimaryText}>
                Ver Dispositivos
              </Text>
            </Text>
          </View>
          <View style={{ flex: 1, marginLeft: 16 }}>
            <Text
              style={GlobalStyles.buttonSecondary}
              onPress={() => console.log("Adicionar Dispositivos")}
            >
              <Text style={GlobalStyles.buttonSecondaryText}>
                Adicionar outros
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.neutral100,
    padding: 16,
    marginBottom: 20,
  },
  heroTextContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  subtitle: {
    fontFamily: Typography.regular,
    fontSize: 14,
    color: Colors.primary750,
    marginLeft: 6,
  },
  heroImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: Typography.bold,
    marginBottom: 12,
    paddingHorizontal: 16,
    color: Colors.primary900,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: Typography.bold,
    marginBottom: 8,
    color: Colors.primary900,
  },
  transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  transactionText: {
    fontSize: 14,
    fontFamily: Typography.regular,
    color: Colors.primary800,
  },
  transactionDate: {
    fontSize: 12,
    fontFamily: Typography.regular,
    color: Colors.neutral500,
  },
  totalContainer: {
    alignItems: "flex-start",
    padding: 8,
    backgroundColor: "#acacacba",
    borderRadius: 4,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontFamily: Typography.bold,
    color: Colors.primary900,
  },
  syncCard: {
    backgroundColor: Colors.neutral100,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  syncSubtitle: {
    marginTop: 6,
    fontSize: 13,
    fontFamily: Typography.regular,
    color: Colors.neutral800,
  },
  calendar: {
    borderRadius: 12,
    marginBottom: 16,
    marginHorizontal: 16,
  },
});
