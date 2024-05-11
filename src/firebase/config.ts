import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnhRb-ig4B0aeiiS3bTXht6M_OU5Q8514",
  authDomain: "encontre-rs.firebaseapp.com",
  projectId: "encontre-rs",
  storageBucket: "encontre-rs.appspot.com",
  messagingSenderId: "151767134410",
  appId: "1:151767134410:web:90801965c8d8acc043c433",
  measurementId: "G-NQB8ZEFQGB",
};

const app = initializeApp(firebaseConfig);

export { app };
