// services/watsonService.js
import axios from "axios";

const API_KEY = "o2eeX8A4HsnI5XIyAGPoWoX1ahPOODl36QZYzgh1CL_X";
const ASSISTANT_ID = "d77aae84-111c-4628-bb46-464b0b233ea5";
const URL = "https://api.au-syd.assistant.watson.cloud.ibm.com/instances/7e56fca2-eebc-4842-806b-db76b18ba329";

// Contexto da conversa (para o Watsonx lembrar do que foi falado)
let conversationContext = {};

export async function sendMessageToWatson(message) {
  try {
    const response = await axios.post(
      `${URL}/v2/assistants/${ASSISTANT_ID}/actions?version=2023-06-14`,
      {
        type: "text",
        text: message,
        context: conversationContext, // envia o contexto anterior
      },
      {
        auth: { username: "apikey", password: API_KEY },
      }
    );

    // Atualiza o contexto com a resposta do Watsonx
    if (response.data.context) {
      conversationContext = response.data.context;
    }

    // Watsonx pode retornar texto em output_text ou em array de resultados
    const watsonText =
      response.data.output_text ||
      response.data.output?.[0]?.generic?.[0]?.text ||
      "Sem resposta 😅";

    return { watsonText };
  } catch (error) {
    console.error("Erro ao enviar mensagem para Watsonx:", error);
    throw error;
  }
}

// Opcional: função para resetar o contexto da conversa
export function resetConversation() {
  conversationContext = {};
}
