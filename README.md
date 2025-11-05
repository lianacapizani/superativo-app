# 📱 Superativo App

Aplicativo mobile desenvolvido com React Native + Expo Router, focado em treinos, rankings, aulas esportivas e gerenciamento de usuários com Firebase Auth e Firestore.

## 🚀 Tecnologias

- Expo (com Expo Router)
- React Native
- react-native-safe-area-context
- Firebase (Auth e Firestore)
- Expo Google Fonts (Montserrat)

## 📂 Estrutura

```
app/
┣ aluno/ → Área do Aluno
┃ ┣ (tabs)/ → Home, Minha Turma, Profile, Ranking
┃ ┗ login.jsx
┣ professor/ → Área do Professor
┃ ┣ (tabs)/ → Home, Profile, Ranking, Turmas
┃ ┗ [turmaId]/ → Presença e Estatísticas
┣ styles/ → Chat, SignUp, layouts e cores
components/ → Componentes reutilizáveis
services/ → Configuração Firebase e ranking
assets/ → Imagens e ícones

```

## ⚡ Funcionalidades

### Área do Professor
- Gerenciar turmas e alunos  
- Marcar presença e controlar pontuação (+ / –)  
- Visualizar estatísticas: frequência, média de pontos, total de presentes  
- **Ranking do professor:** ajuste de pontos, visualização de todos os alunos, posições e níveis  

### Área do Aluno
- Visualizar pontuação, progresso e ranking  
- **Ranking do aluno:** ver sua posição individual, ranking geral e da turma  
- Chat de suporte: tirar dúvidas sobre o app, rankings, treinos personalizados e outros suportes suportes.(Agora implementado com Ativito, assistente local).

### Ranking
- Distinto para cada perfil:  
  - **Aluno:** somente visualização da própria posição e ranking da turma  
  - **Professor:** controle completo de pontos, presença e visualização de todos os alunos  

### Geral
- Autenticação via Firebase (email/senha e login social)  
- Paleta de cores personalizada e tipografia Montserrat  
- Dados sincronizados em tempo real via Firestore  

## 🛠️ Como rodar

```bash
git clone https://github.com/lianacapizani/superativo-app
cd superativo-app
npm install # ou yarn install
npx expo start
```

### ℹ️ Observação
- O app utiliza Firebase Auth para autenticação de usuários (login e cadastro).
- As senhas podem ser exibidas ou ocultadas nos inputs com o ícone de olho.
- O Firebase Firestore é usado para armazenar dados de usuários, pontos e ranking.
- Botões de + / – pontos e presença próximos para facilitar o uso do professor.
- Chat do aluno centraliza dúvidas, suporte e orientação personalizada.
- Estrutura modular separa claramente área do aluno e área do professor, facilitando manutenção e escalabilidade.

