# 📱 Superativo App

Aplicativo mobile desenvolvido com React Native + Expo Router, focado em treinos, rankings e aulas para esportes.

## 🚀 Tecnologias

- Expo (com Expo Router)
- React Native
- react-native-safe-area-context
- react-navigation
- Firebase Firestore

## 📂 Estrutura

```
app/(tabs)/index.jsx       → HomeScreen
app/(tabs)/ranking.jsx     → RankingScreen
app/(tabs)/myclass.jsx     → MyClassScreen
components/                → Componentes reutilizáveis
app/styles/                → Estilos globais (cores, tipografia, layouts)
```

## 🛠️ Como rodar

```bash
git clone https://github.com/seu-usuario/superativo-app.git
cd superativo-app
npm install # ou yarn install
npx expo start
```

### ℹ️ Observação
O app utiliza Firebase Firestore para armazenamento de dados.

## 📌 Commits recentes

- finalização e ajustes da HomeScreen
- criação da tab RankingScreen
- criação da tab MyClassScreen