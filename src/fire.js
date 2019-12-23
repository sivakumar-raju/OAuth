import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAZzUQ2yfd3jltDhuWqhJbR56wigI-hoNE",
    authDomain: "bookmark-bc065.firebaseapp.com",
    databaseURL: "https://bookmark-bc065.firebaseio.com",
    projectId: "bookmark-bc065",
    storageBucket: "bookmark-bc065.appspot.com",
    messagingSenderId: "918226635187",
  };

  const fire = firebase.initializeApp(config)
  export default fire;
