import { db } from "../../_utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import * as CRUD from "./firebase_crud";
import { readAllData } from "./firebase_crud";

export async function getUserItems(userId) {
//   const queryItems = CRUD.readAllData("users");
const queryItems = readAllData("")
  const userItems = await getDocs(queryItems);

  userItems.forEach((item) => {
    console.log(item.name);
  });
}

export async function addItem(userId, item) {
  const newItem = CRUD.createData("users, Id_1, items",  { name: item.name,
    quantity: item.qantity,
    category: item.category});
   

  console.log(`new item ${item.name} added`);
}
