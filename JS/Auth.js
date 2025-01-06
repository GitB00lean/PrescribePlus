// Import the functions you need from the SDKs you need
import { initializeApp } from "../node_modules/firebase/app";
import { getAuth,connectAuthEmulator,signInWithEmailAndPassword } from "../node_modules/firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const loginbtn = document.getElementById("loginBtn");
const registerbtn = document.getElementById("registerBtn");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8_pLY0HEZZM-FR2BU81b688n99kYR_68",
  authDomain: "prescribeplus-ddb2c.firebaseapp.com",
  projectId: "prescribeplus-ddb2c",
  storageBucket: "prescribeplus-ddb2c.appspot.com",
  messagingSenderId: "294927455822",
  appId: "1:294927455822:web:b7acb355b731e10cb7d51f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(firebaseConfig)
connectAuthEmulator(auth)

const LoginEmailPassowrd= async()=>{
    const SigninUsername= document.querySelector(".signin_username")
    const SigninMail= document.querySelector(".signin_email")
    const SigninPassword= document.querySelector(".signin_password")
}

registerbtn.addEventListener("click",LoginEmailPassowrd)