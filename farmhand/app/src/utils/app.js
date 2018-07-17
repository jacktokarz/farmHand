import firebase from 'firebase';
import { fromText } from '../actions'


const config = {
    apiKey: "AIzaSyBreOUIUqC9gFC2pX5VrcsvTaHqVwpTJWI",
    authDomain: "farm-hand-dbc33.firebaseapp.com",
    databaseURL: "https://farm-hand-dbc33.firebaseio.com",
    projectId: "farm-hand-dbc33",
    storageBucket: "",
    messagingSenderId: "939178338794"
  };
  firebase.initializeApp(config);

export const database= firebase.database();

export function registerUser(data) {
  database.ref('users/'+data.username+'/').set({
    password: data.password,
  });
}

export function logInUser(data) {
  var password= database.ref('/users/' + data.username + '/password');
  if(password === null) {
    return "missing";
  }
  if(password === data.password) {
    return "incorrect";
  }
  return "loggedIn";
}


export function listenForMessage(store) {
  database.ref('message/').on('value', snapshot => {
    store.dispatch(fromText.save(snapshot.val().value)) 
  })
}