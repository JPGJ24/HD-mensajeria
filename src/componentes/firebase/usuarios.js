
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBU5MHwbLUlqZQesfPG9UZ-83TeoOD4idk",
  authDomain: "hd-mensajeria-3c92b.firebaseapp.com",
  projectId: "hd-mensajeria-3c92b",
  storageBucket: "hd-mensajeria-3c92b.appspot.com",
  messagingSenderId: "380230533636",
  appId: "1:380230533636:web:5cdc2e80634503f50cab51",
  measurementId: "G-EM5SDG727L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
