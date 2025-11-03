// 🤖 Ativito — Assistente Virtual do SuperATIVO
// Simula respostas locais sem depender de API externa

export async function sendMessageToBot(message) {
  const lower = message.toLowerCase();
  let botReply = "Desculpe 😅, não entendi bem. Pode tentar de outro jeito?";
  let actions = [];

  // 👋 Menu inicial
  if (
    lower.includes("oi") ||
    lower.includes("olá") ||
    lower.includes("ativito") ||
    lower.includes("menu")
  ) {
    botReply =
      "Olá! 👋 Sou o *Ativito*, seu assistente do app *SuperATIVO* 💪\n" +
      "Posso te ajudar com:\n\n" +
      "🏋️ *Treinos*\n" +
      "🏆 *Ranking*\n" +
      "🎥 *Aulas e desafios*\n" +
      "⚙️ *Perfil e notificações*\n\n" +
      "O que você quer explorar hoje?";
    actions = [
      { title: "Explorar treinos 🏋️", value: "treinos" },
      { title: "Aulas e desafios 🎥", value: "aulas" },
      { title: "Ranking e conquistas 🏆", value: "ranking" },
      { title: "Dicas de saúde 🍎", value: "dicas" },
      { title: "Meu perfil ⚙️", value: "perfil" },
      { title: "Notificações 🔔", value: "notificações" },
      { title: "Sugestões de treino 💡", value: "sugestões" },
      { title: "Suporte 💬", value: "suporte" },
    ];
  }

  // 🏋️ Explorar treinos
  else if (lower.includes("treino") || lower.includes("treinos")) {
    botReply =
      "Qual tipo de treino você quer fazer hoje?";
    actions = [
      { title: "Cardio 🏃", value: "cardio" },
      { title: "HIIT ⚡", value: "hiit" },
      { title: "Força 💪", value: "força" },
      { title: "Alongamento 🧘", value: "alongamento" },
      { title: "Pernas 🦵", value: "pernas" },
      { title: "Ombro / Peito 🏋️", value: "ombro" },
    ];
  }

  // 🏃 Cardio
  else if (lower.includes("cardio")) {
    botReply =
      "🏃‍♂️Cardio para resistência e energia!\n\n" +
      "O cardio é perfeito pra melhorar o condicionamento físico e fortalecer o coração.\n\n" +
      "💥Treinos sugeridos:\n" +
      "• Corrida intervalada: 3 min leve / 1 min rápido (5x)\n" +
      "• Ciclismo indoor: 30–40 min mantendo ritmo forte\n" +
      "• Pular corda: 5 rounds de 2 min com 30s de descanso\n\n" +
      "💡Dica: Respire controlando o ritmo e aumente a intensidade aos poucos!";
  }

  // ⚡ HIIT
  else if (lower.includes("hiit")) {
    botReply =
      "⚡HIIT — rápido, intenso e eficiente!\n\n" +
      "Perfeito pra queimar gordura e ganhar resistência.\n\n" +
      "🔥Exemplo de circuito (20–30 min):\n" +
      "• 30s Burpees + 15s descanso\n" +
      "• 30s Agachamento com salto + 15s descanso\n" +
      "• 30s Mountain climbers + 15s descanso\n" +
      "• 30s Flexões + 15s descanso\n\n" +
      "Repita 4–5x.\n💡 Dica: Comece leve e aumente o ritmo conforme evolui!";
  }

  // 💪 Força
  else if (lower.includes("força")) {
    botReply =
      "💪Treino de força para músculos e resistência!\n\n" +
      "🏋️Sugestões:\n" +
      "• Supino reto ou flexões (3x12)\n" +
      "• Agachamento com halteres (3x12)\n" +
      "• Remada com elástico (3x12)\n" +
      "• Ponte de glúteo (3x15)\n\n" +
      "💡Dica: Foque na execução correta, não no peso!";
  }

  // 🧘 Alongamento
  else if (lower.includes("alongamento")) {
    botReply =
      "🧘‍♀️Alongamento — flexibilidade e bem-estar!\n\n" +
      "✨Sugestões:\n" +
      "• Costas e lombar (30s)\n" +
      "• Pernas (posterior, quadríceps, panturrilha – 30s)\n" +
      "• Ombros e braços (20s)\n" +
      "• Yoga rápida: Saudação ao Sol (2-3 ciclos)\n\n" +
      "💡Dica: Respire fundo e sinta o movimento!";
  }

  // 🦵 Pernas
  else if (lower.includes("perna")) {
    botReply =
      "🦵Treino de pernas e glúteos!\n\n" +
      "🔥Exercícios recomendados:\n" +
      "• Agachamento livre (3x12)\n" +
      "• Avanço alternado (3x12)\n" +
      "• Stiff com halteres (3x10–12)\n" +
      "• Elevação de panturrilha (3x15–20)";
  }

  // 🏋️ Ombro / Peito
  else if (lower.includes("ombro") || lower.includes("peito")) {
    botReply =
      "🏋️Treino de Ombro e Peito\n\n" +
      "💪Sugestões:\n" +
      "• Supino reto ou inclinado (3x10–12)\n" +
      "• Flexões tradicionais (3x12)\n" +
      "• Elevação lateral e frontal (3x12)\n" +
      "• Remada alta (3x12)";
  }

  return { botReply, actions };
}

// Reset da conversa
export function resetConversation() {
  console.log("🔁 Conversa reiniciada com o Ativito");
}
