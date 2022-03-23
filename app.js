  // Import the functions you need from the SDKs you need
  //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
 // import { GoogleAuthProvider } from "firebase/auth";
  //import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  //import { getAuth, signOut } from "firebase/auth";



  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDSCjsVUrQ57OTfsapVc5LDSqf7_RcPnG4",
    authDomain: "qr-auth-2a652.firebaseapp.com",
    projectId: "qr-auth-2a652",
    storageBucket: "qr-auth-2a652.appspot.com",
    messagingSenderId: "218316837225",
    appId: "1:218316837225:web:1732aa7a5ef69eee902df8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  const auth = getAuth();

signinbtn=document.getElementById('auth-btn')


signinbtn.addEventListener("click", (e) => {
  console.log(1)
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

})





  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });



