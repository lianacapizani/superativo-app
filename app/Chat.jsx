
import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { sendMessageToWatson } from "../services/watsonService";
export default function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef();

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await sendMessageToWatson(input);
      const watsonText = response.output_text || "Sem resposta 😅";
      setMessages((prev) => [...prev, { from: "watson", text: watsonText }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { from: "watson", text: "Erro ao conectar com o Watson 😢" }]);
    } finally {
      setLoading(false);
    }
  };

  // Scroll automático para a última mensagem
  useEffect(() => {
    scrollRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={100}
    >
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
              m.from === "user" ? styles.userBubble : styles.watsonBubble,
            ]}
          >
            <Text style={m.from === "user" ? styles.userText : styles.watsonText}>
              {m.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#999"
          style={styles.textInput}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton} disabled={loading}>
          <Ionicons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  messagesContainer: { padding: 20 },
  messageBubble: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 16,
    marginVertical: 5,
  },
  userBubble: { backgroundColor: "#FA4900", alignSelf: "flex-end", borderTopRightRadius: 0 },
  watsonBubble: { backgroundColor: "#1E1E1E", alignSelf: "flex-start", borderTopLeftRadius: 0 },
  userText: { color: "#fff", fontSize: 16 },
  watsonText: { color: "#fff", fontSize: 16 },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#333",
    backgroundColor: "#000",
  },
  textInput: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#1E1E1E",
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: "#FA4900",
    borderRadius: 20,
    padding: 12,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
