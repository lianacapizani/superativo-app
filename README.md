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
app/(tabs)/index.jsx       → HomeScreen
app/(tabs)/ranking.jsx     → RankingScreen
app/(tabs)/myclass.jsx     → MyClassScreen
app/(auth)/Login.jsx       → LoginScreen (Firebase Auth)
app/(auth)/SignUp.jsx      → Cadastro de usuário (Firebase Auth)
components/                → Componentes reutilizáveis (SocialLogin, HeaderBar etc.)
app/styles/                → Estilos globais (cores, tipografia, layouts)
services/firebase.js       → Configuração e export do Firebase
```


## ⚡ Funcionalidades

### Login e Cadastro de Usuário
- Autenticação via **Firebase Auth** (email e senha)  
- Ícone de **visualizar/ocultar senha** nos inputs  
- Mensagens de erro claras (senha fraca, e-mail inválido, usuário não encontrado, etc.)  

### Ranking
- Tela de ranking de usuários por pontos  
- Visualização de posição, nome, pontuação e data  
- Tipografia consistente (Montserrat)  

### Minha Turma / MyClassScreen
- Visualização de pontos acumulados  
- Agenda de aulas e calendário integrado  

### HomeScreen
- Tela inicial com resumo de atividades  
- Acesso rápido às outras tabs  

### Social Login
- Componentes para login via redes sociais  

### Estilos Globais
- Paleta de cores personalizada (azul, verde, neutros)  
- Tipografia Montserrat carregada via Expo Google Fonts  
- Componentes reutilizáveis com Styled Components e StyleSheet  

### Firebase Firestore
- Armazenamento de dados de usuários e pontos  
- Sincronização de ranking e progresso em tempo real  


## 🛠️ Como rodar

```bash
git clone https://github.com/seu-usuario/superativo-app.git
cd superativo-app
npm install # ou yarn install
npx expo start
```

### ℹ️ Observação
- O app utiliza Firebase Auth para autenticação de usuários (login e cadastro).
- As senhas podem ser exibidas ou ocultadas nos inputs com o ícone de olho.
- O Firebase Firestore é usado para armazenar dados de usuários, pontos e ranking.

