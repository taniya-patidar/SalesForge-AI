import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsG1SetiYPqPkrOWQ_4PuBd6PCSpmjAfo",

  authDomain: "salesforge-ai-eff58.firebaseapp.com",

  projectId: "salesforge-ai-eff58",

  storageBucket: "salesforge-ai-eff58.firebasestorage.app",

  messagingSenderId: "921017593277",

  appId: "1:921017593277:web:2a7a67dad7c9a54ee976d4",

  measurementId: "G-R0XDMN5KJZ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();