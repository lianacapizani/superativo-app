import axios from "axios";

const API_KEY = "o2eeX8A4HsnI5XIyAGPoWoX1ahPOODl36QZYzgh1CL_X";
const ASSISTANT_ID = "d77aae84-111c-4628-bb46-464b0b233ea5";
const URL = "https://api.au-syd.assistant.watson.cloud.ibm.com/instances/7e56fca2-eebc-4842-806b-db76b18ba329/v2/assistants/d77aae84-111c-4628-bb46-464b0b233ea5/message?version=2024-08-25";

let conversationContext = {};

export async function sendMessageToWatson(message) {
  try {
    console.log("🔹 Enviando para Watsonx:", message);

    const response = await axios.post(
      `${URL}/v2/assistants/${ASSISTANT_ID}/message?version=2024-08-25`,
      {
        input: {
          message_type: "text",
          text: message,
        },
        context: conversationContext,
      },
      {
        auth: { username: "apikey", password: API_KEY },
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log("✅ Resposta bruta do Watsonx:", JSON.stringify(response.data, null, 2));

    // Atualiza o contexto da conversa
    if (response.data.context) {
      conversationContext = response.data.context;
    }

    // Pega todos os textos retornados
    const watsonText = (response.data.output?.generic || [])
      .filter(item => item.response_type === "text")
      .map(item => item.text)
      .join("\n") || "";

    // Pega ações (botões) se existirem
    const actions = (response.data.output?.actions || []).map((action) => ({
      title: action.title,
      type: action.type,
      value: action.type === "client" ? action.client_payload : action.value,
    }));

    return { watsonText, actions };
  } catch (error) {
    console.error("❌ Erro ao enviar mensagem para Watsonx:");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Dados:", error.response.data);
    } else {
      console.error(error.message);
    }
    throw error;
  }
}

export function resetConversation() {
  conversationContext = {};
}
