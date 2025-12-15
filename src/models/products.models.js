import { db } from "../data/data.js";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  deleteDoc
} from "firebase/firestore";

const COL = "products";

export async function obtenerProductos() {
  const snap = await getDocs(collection(db, COL));
  const out = [];
  snap.forEach(d => out.push({ id: d.id, ...d.data() }));
  return out;
}

export async function obtenerProducto(id) {
  const ref = doc(db, COL, id);
  const snap = await getDoc(ref);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function crearProducto(data) {
  const producto = {
    title: String(data.title),
    price: Number(data.price),
    category: String(data.category),
    description: data.description ? String(data.description) : "",
    image: data.image ? String(data.image) : ""
  };
  const ref = await addDoc(collection(db, COL), producto);
  return { id: ref.id, ...producto };
}

export async function eliminarProducto(id) {
  const ref = doc(db, COL, id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return false;
  await deleteDoc(ref);
  return true;
}
