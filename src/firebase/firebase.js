import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCEi6YSMqWhpkgOBn_eNR0GdgAc5VS6pz4",
  authDomain: "authentication-ffa6a.firebaseapp.com",
  projectId: "authentication-ffa6a",
  storageBucket: "authentication-ffa6a.appspot.com",
  messagingSenderId: "391874784508",
  appId: "1:391874784508:web:1af60115ecdf4ec297fb79"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;