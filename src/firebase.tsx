import firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyDoDUWtASHLSyK_g7XbH9pOngHnVdqC6mQ',
  authDomain: 'quick-estimation.firebaseapp.com',
  databaseURL: 'https://quick-estimation.firebaseio.com',
  projectId: 'quick-estimation',
  storageBucket: 'quick-estimation.appspot.com',
  messagingSenderId: '597599232648',
  appId: '1:597599232648:web:429563577c0aaca0ab353d',
};
firebase.initializeApp(config);
const db = firebase.firestore();
export { db };
