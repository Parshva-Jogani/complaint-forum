import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  const firebaseConfig = {
    apiKey: "AIzaSyCi1L0gAGhn6ojYGO2DODlwkrOunY65o5s",
    authDomain: "complaint-forum-2bfaf.firebaseapp.com",
    projectId: "complaint-forum-2bfaf",
    storageBucket: "complaint-forum-2bfaf.appspot.com",
    messagingSenderId: "876323969131",
    appId: "1:876323969131:web:a61d851f0d68709073392e"
  }; 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

