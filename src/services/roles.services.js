import { database } from "../firebaseConfig";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";

const rolesCollectionRef = collection(database, "roles");

class RolesDataService {
  addRole = async (newRole) => {
    return await addDoc(rolesCollectionRef, newRole);
  };

  getRole = async (roleId) => {
    const roleDocRef = doc(database, "roles", roleId);
    return await getDoc(roleDocRef);
  };
}

export default new RolesDataService();
