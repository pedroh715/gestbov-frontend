import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    /* apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_MEASUREMENT_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID */
    apiKey: "AIzaSyAR_lInUvsZ2MIwOfl2LHtfBrMQk1fGHTU",
    authDomain: "gestbov-60b8f.firebaseapp.com",
    projectId: "gestbov-60b8f",
    storageBucket: "gestbov-60b8f.appspot.com",
    messagingSenderId: "967527622279",
    appId: "1:967527622279:web:11a3d0804259ebe052ba22",
    measurementId: "G-3E7BZ0SSWN"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)

