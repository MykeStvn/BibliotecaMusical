// Importaciones al nivel superior
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBlTQaP3P4gq9w9xpbC-kg-h7oQdP-ny84",
  authDomain: "coleccion-musical.firebaseapp.com",
  projectId: "coleccion-musical",
  storageBucket: "coleccion-musical.appspot.com",
  messagingSenderId: "8453827642",
  appId: "1:8453827642:web:20e7929cc77cbc68cad903"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Función de inicialización
function initialize() {
  // Obtener el botón de Google
  const googleButton = document.getElementById('google-login');

  // Verificar si el botón existe en el DOM
  if (googleButton) {
    // Añadir el event listener para el botón de Google
    googleButton.addEventListener('click', () => {
      signInWithPopup(auth, provider)
        .then(result => {
          // Login exitoso
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          alert("Usuario Logueado con Google");
          console.log(user);
          // Redirigir a la página de inicio
          window.location.href = "menu.html";
        })
        .catch(error => {
          // Manejo de errores
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`Error de autenticación con Google: ${errorMessage}`);
          console.error("Error al iniciar sesión con Google:", errorCode, errorMessage);
        });
    });
  } else {
    console.error('El botón de inicio de sesión con Google no se encontró en el DOM');
  }
}

// Ejecutar la función de inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initialize);
