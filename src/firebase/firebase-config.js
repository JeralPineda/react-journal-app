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

const firebaseConfigTesting = {
   apiKey: 'AIzaSyDdcMpYr6xsRAtMubqot6z5oCvsvPBxJ-w',
   authDomain: 'redux-demo-database.firebaseapp.com',
   projectId: 'redux-demo-database',
   storageBucket: 'redux-demo-database.appspot.com',
   messagingSenderId: '556018416573',
   appId: '1:556018416573:web:39d43745eefffcf69870d4',
};

if (process.env.NODE_ENV === 'test') {
   // testing
   firebase.initializeApp(firebaseConfigTesting);
} else {
   //dev/prod
   firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
