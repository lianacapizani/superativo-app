// app/services/rankingService.js
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "./firebase";

export async function buscarRanking() {
  const q = query(collection(db, "ranking"), orderBy("pontos", "desc"), limit(10));
  const querySnapshot = await getDocs(q);
  let resultados = [];
  querySnapshot.forEach((doc) => {
    resultados.push({ id: doc.id, ...doc.data() });
  });
  return resultados;
}
