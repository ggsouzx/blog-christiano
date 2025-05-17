
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyABeyYRiOsnfGVK0P97BKhQqo5CnZX4X_4",
    authDomain: "blog-christiano.firebaseapp.com",
    projectId: "blog-christiano",
    storageBucket: "blog-christiano.firebasestorage.app",
    messagingSenderId: "427323489539",
    appId: "1:427323489539:web:39bade91a8d0149250fd36"
};


firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();