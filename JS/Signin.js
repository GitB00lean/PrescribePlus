 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
 import {getAuth,createUserWithEmailAndPassword , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
 import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBUOt83PYlX1hsodgiGiblKN-sSTEwJmsQ",
   authDomain: "login-form-a61d8.firebaseapp.com",
   projectId: "login-form-a61d8",
   storageBucket: "login-form-a61d8.appspot.com",
   messagingSenderId: "749713866249",
   appId: "1:749713866249:web:73a93c815df6c7b66a42d8"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const auth=getAuth();
 const db=getFirestore();

 onAuthStateChanged(auth,(user)=>{
   const loggedInUserId=localStorage.getItem('loggedInUserId');
   if(loggedInUserId){
	   const docRef =doc(db, "users",loggedInUserId);
	   getDoc(docRef)
	   .then((docSnap)=>{
		   if(docSnap.exists()){
			   const userData=docSnap.data();
			   document.getElementById('loggedUserFName').innerText=userData.firstName;
			   document.getElementById('loggedUserEmail').innerText=userData.email;
			   document.getElementById('loggedUserLName').innerText=userData.lastName;

		   }
		   else{
			   console.log("no document found matching id")
		   }
	   })
	   .catch((error)=>{
		   console.log("Error getting document");
	   })
   }
   else{
	   console.log("User Id not Found in Local storage")
   }
   
 })

 const logoutButton=document.getElementById('logout'); //logout code .
 logoutButton.addEventListener('click',()=>{
   localStorage.removeItem('loggedInUserId');
   signOut(auth)
   .then(()=>{
	   window.location.href='index.html';
   })
   .catch((error)=>{
	   console.error('Error Signing out:',error);
   })
 })

 const signUpButton=document.getElementById('signUpButton');
 const signInButton=document.getElementById('signInButton');
 const signInForm=document.getElementById('signIn');
 const signUpForm=document.getElementById('signup');
 
 signUpButton.addEventListener('click',function(){
	 signInForm.style.display="none";
	 signUpForm.style.display="block";
 })
 signInButton.addEventListener('click', function(){
	 signInForm.style.display="block";
	 signUpForm.style.display="none";
 })