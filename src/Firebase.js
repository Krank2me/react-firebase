import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyAioaEftsSisbQX_hICS-9wBub1OrVNmMI",
    authDomain: "react-firebase-c0608.firebaseapp.com",
    databaseURL: "https://react-firebase-c0608.firebaseio.com",
    projectId: "react-firebase-c0608",
    storageBucket: "react-firebase-c0608.appspot.com",
    messagingSenderId: "1085218779570"
  };
  
  firebase.initializeApp(config);
  firebase.firestore().settings(settings);

