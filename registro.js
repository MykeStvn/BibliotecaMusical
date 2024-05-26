
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import {sendEmailVerification, getAuth, signInWithPopup,
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBlTQaP3P4gq9w9xpbC-kg-h7oQdP-ny84",
    authDomain: "coleccion-musical.firebaseapp.com",
    projectId: "coleccion-musical",
    storageBucket: "coleccion-musical.appspot.com",
    messagingSenderId: "8453827642",
    appId: "1:8453827642:web:20e7929cc77cbc68cad903"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Ensure that the DOM is fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', () => {
  const crearcuentaForm = document.getElementById('formulario-registro');

  crearcuentaForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailr = document.getElementById('email').value;
    const passwordr = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, emailr, passwordr)
      .then(cred => {
        alert("USUARIO CREADO");
        window.location.href="login.html";
      })
      .catch(error => {
        const errorcode = error.code;
        if (errorcode === 'auth/email-already-in-use')
          alert("El correo ya existe");
        else if (errorcode === 'auth/invalid-email')
          alert('El correo no es válido');
        else
          alert('Error: ' + error.message);
      });
  });
});