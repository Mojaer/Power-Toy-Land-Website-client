// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7gRkj8x4eoLLt3nLVSDLEKjJopuQ8VlY",
    authDomain: "power-toy-land.firebaseapp.com",
    projectId: "power-toy-land",
    storageBucket: "power-toy-land.appspot.com",
    messagingSenderId: "230558454415",
    appId: "1:230558454415:web:fde166f74ff1e51bf6d6fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;