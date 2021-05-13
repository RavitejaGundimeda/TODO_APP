

  import firebase from "firebase";
  const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyA7O-aP_50rAEG06ltrV9meX_Y2rSh4i9c",
    authDomain: "todo-app-cp-70521.firebaseapp.com",
    projectId: "todo-app-cp-70521",
    storageBucket: "todo-app-cp-70521.appspot.com",
    messagingSenderId: "170325177460",
    appId: "1:170325177460:web:604a6860e3bff7116dcd21",
    measurementId: "G-N7LYQEMC3N"

  });

  const db = firebaseApp.firestore();
  
  export default db;