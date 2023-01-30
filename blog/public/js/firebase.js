let firebaseConfig = {
    apiKey: "AIzaSyCFmmd4b5PiqVnePEA0e73TIft8bLD9k1w",
    authDomain: "mafifest-2023-blog.firebaseapp.com",
    projectId: "mafifest-2023-blog",
    storageBucket: "mafifest-2023-blog.appspot.com",
    messagingSenderId: "147520509076",
    appId: "1:147520509076:web:65ae59f1a358d32800d081"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();