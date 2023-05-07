import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyCgyUlz-br2eBxBO0SvxYp3cEf0PlQK6os",
  // authDomain: "react-http-9a0fa.firebaseapp.com",
  // databaseURL:
  //   "https://react-http-9a0fa-default-rtdb.asia-southeast1.firebasedatabase.app",
  // projectId: "react-http-9a0fa",
  // storageBucket: "react-http-9a0fa.appspot.com",
  // messagingSenderId: "236109103579",
  // appId: "1:236109103579:web:239b196706d5811dee67fe",

  apiKey: "AIzaSyAeWyL2pn4Wm8h8uHeo6zU9jFOWuqf6Jyw",
  authDomain: "divyam-development.firebaseapp.com",
  projectId: "divyam-development",
  storageBucket: "divyam-development.appspot.com",
  messagingSenderId: "148477407005",
  appId: "1:148477407005:web:58bd89b36e48d88f81fbf4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export default app;
