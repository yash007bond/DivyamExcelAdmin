import { database } from "../firebaseConfig";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";

const staffCollectionRef = collection(database, "staff");

class StaffDataService {
  addUser = async (newUser) => {
    return await addUser(staffCollectionRef, newUser);
  };

  getUser = async (userId) => {
    const userDocRef = doc(database, "staff", userId);
    return await getDoc(userDocRef);
  };
}

export default new StaffDataService();
