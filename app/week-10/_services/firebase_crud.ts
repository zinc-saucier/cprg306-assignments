import { db } from "../../_utils/firebase";
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

/**
 * CREATE: Adds a new document with an auto-generated ID
 */
export const createData = async (collectionName: string, data: object) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error };
  }
};

/**
 * READ: Gets a single document by its ID
 */
export const readData = async (
  collectionName: string,
  user: string,
  sub: string,
) => {
  try {
    const docRef = doc(db, collectionName, user, sub);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  } catch (error) {
    console.error("Error reading document: ", error);
    throw error;
  }
};



/**
 * READ ALL: Gets all documents in a collection
 */
export const readAllData = async (collectionName: string) => {
  // try {
  //   const querySnapshot = await getDocs(collection(db, collectionName));
  //   return querySnapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));
  // } catch (error) {
  //   console.error("Error fetching documents: ", error);
  //   throw error;
  // }
 console.log("it got here...")
const docRef = doc(db, "users", "Id_1", "items", "itemId_1");
const docSnap = await getDoc(docRef);
 
if (docSnap.exists()) {
  console.log("Item data:", docSnap.data());
  return (docSnap.data())
} else {
  console.log("No such item!");
}
};

/**
 * UPDATE: Updates specific fields in an existing document
 */
export const updateData = async (
  collectionName: string,
  id: string,
  data: object,
) => {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating document: ", error);
    return { success: false, error };
  }
};

/**
 * DELETE: Removes a document from the collection
 */
export const deleteData = async (collectionName: string, id: string) => {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting document: ", error);
    return { success: false, error };
  }
};
