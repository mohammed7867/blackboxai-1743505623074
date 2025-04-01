// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// DOM elements
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Login function
const loginWithEmail = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirect to dashboard on successful login
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            alert(error.message);
        });
};

// Social login functions
const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(() => {
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            alert(error.message);
        });
};

const loginWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
        .then(() => {
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            alert(error.message);
        });
};

// Event listeners
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginWithEmail(emailInput.value, passwordInput.value);
});

document.querySelector('.fa-google').parentElement.addEventListener('click', loginWithGoogle);
document.querySelector('.fa-facebook').parentElement.addEventListener('click', loginWithFacebook);

// Auth state observer
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        console.log('User logged in:', user.email);
    } else {
        // User is signed out
        console.log('User signed out');
    }
});