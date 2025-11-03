import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  resetConversation,
  sendMessageToBot,
} from "../services/chatbotService";

export default function Chat({ onClose }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef();

  // Mensagem inicial
  useEffect(() => {
    const initialMessage = {
      from: "bot",
      text:
        "Olá! Sou o Ativito, seu assistente virtual.\n" +
        "Posso te ajudar com:\n\n" +
        "🏋️ Treinos\n" +
        "🏆 Ranking\n" +
        "🎥 Aulas e desafios\n" +
        "⚙️ Perfil e notificações\n\n" +
        "O que você quer explorar hoje?",
      actions: [
        { title: "Explorar treinos 🏋️", value: "treinos" },
        { title: "Aulas e desafios 🎥", value: "aulas" },
        { title: "Ranking e conquistas 🏆", value: "ranking" },
        { title: "Dicas de saúde 🍎", value: "dicas" },
        { title: "Meu perfil ⚙️", value: "perfil" },
        { title: "Notificações 🔔", value: "notificações" },
        { title: "Sugestões de treino 💡", value: "sugestões" },
        { title: "Suporte 💬", value: "suporte" },
      ],
    };
    setMessages([initialMessage]);
  }, []);

  const sendMessage = async (msg) => {
    if (!msg.trim()) return;

    const userMsg = { from: "user", text: msg };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await sendMessageToBot(msg);
      const botText = response.botReply || "Sem resposta 😅";

      setMessages((prev) => [
        ...prev,
        { from: "bot", text: botText, actions: response.actions || [] },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Erro ao gerar resposta 😢" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = (value) => sendMessage(value);

  useEffect(() => {
    scrollRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={64}
    >
      {/* Header com botão fechar e reset */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Ionicons name="close" size={28} color="#FC6E14" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            resetConversation();
            setMessages([]);
          }}
          style={styles.resetButton}
        >
          <Ionicons name="refresh" size={22} color="#FC6E14" />
          <Text style={styles.resetText}>Resetar</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de mensagens */}
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.messagesContainer}
        keyboardShouldPersistTaps="handled"
      >
        {messages.map((m, i) => (
          <View
            key={i}
            style={[
              styles.messageBubble,
              m.from === "user" ? styles.userBubble : styles.botBubble,
            ]}
          >
            <Text style={m.from === "user" ? styles.userText : styles.botText}>
              {m.text}
            </Text>

            {m.actions?.length > 0 && (
              <View style={styles.actionsContainer}>
                {m.actions.map((a, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={styles.actionButton}
                    onPress={() => handleAction(a.value)}
                  >
                    <Text style={styles.actionText}>{a.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Campo de entrada */}
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#999"
          style={styles.textInput}
        />
        <TouchableOpacity
          onPress={() => sendMessage(input)}
          style={styles.sendButton}
          disabled={loading}
        >
          <Ionicons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1, 
    backgroundColor: "#EDEFF7" 
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  closeButton: { 
    marginRight: 10 
  },
  resetButton: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 5 
  },
  resetText: { 
    color: "#FA4900", 
    fontSize: 16 
  },
  messagesContainer: { 
    padding: 20 
  },
  messageBubble: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 16,
    marginVertical: 5,
  },
  userBubble: {
    backgroundColor: "#FC6E14",
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
  },
  botBubble: {
    backgroundColor: "#2957A3",
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
  },
  userText: { 
    color: "#fff", 
    fontSize: 16 
  },
  botText: { 
    color: "#fff", 
    fontSize: 16 
  },
  actionsContainer: { 
    flexDirection: "row", 
    flexWrap: "wrap", 
    marginTop: 8 

  },
  actionButton: {
    backgroundColor: "#98a3b577",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginRight: 8,
    marginTop: 5,
  },
  actionText: { 
    color: "#9bf9f9ff", 
    fontSize: 14, 
    fontWeight: "600" 

  },
  inputContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "#333",
    backgroundColor: "#012e46ff",
  },
  textInput: {
    flex: 1,
    color: "#333",
    backgroundColor: "#EDEFF7",
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: "#FA4900",
    borderRadius: 36,
    padding: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
