import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getUserItems(userId) {
  const queryItems = query(collection(db, "users", `${userId}`, "items"));
  const userItems = await getDocs(queryItems);

  userItems.forEach((item) => {
    console.log(item.name);
  });
}

export async function addItem(userId, item) {
  const newItem = await addDoc(collection(db, "users", `${userId}`, "items"), {
    name: item.name,
    quantity: item.qantity,
    category: item.category,
  });
  console.log(`new item ${item.name} added`);
}
