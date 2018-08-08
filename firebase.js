import firebase from 'firebase';
import { fromText } from '../actions'


const config = {
  apiKey: "AIzaSyCMPMjG6PqxbUWMmjDcTAQ0ruzMboR1YoY",
  authDomain: "test-2018-thing.firebaseapp.com",
  databaseURL: "https://test-2018-thing.firebaseio.com",
  projectId: "test-2018-thing",
  storageBucket: "",
  messagingSenderId: "407461375740",
};
firebase.initializeApp(config);

export const database= firebase.database();

export function postMessage(msg) {
  database.ref('message/').set({
    value: msg,
  });
}


export function listenForMessage(store) {
  database.ref('message/').on('value', snapshot => {
    store.dispatch(fromText.save(snapshot.val().value)) 
  })
}