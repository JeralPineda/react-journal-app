import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
   apiKey: 'AIzaSyDDChMmCbfc_w6f9dg2QbIS4Y_FdoaRl3Y',
   authDomain: 'react-app-cursos-ffa28.firebaseapp.com',
   projectId: 'react-app-cursos-ffa28',
   storageBucket: 'react-app-cursos-ffa28.appspot.com',
   messagingSenderId: '60412900969',
   appId: '1:60412900969:web:b6e77692ceb97dabe214f8',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
