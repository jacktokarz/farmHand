import firebase from 'firebase';
import { fromHeader } from '../actions'


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

export function checkLogin(un, pw) {
  console.log("In utils, checkLogin: passed vars: "+un+", "+pw);
  var password= database.ref('/users/' + un + '/password').once('value');
  console.log("In utils, checkLogin: retrieved pw: "+password);
  if(password === null) {
    return "missing";
  }
  if(password === pw) {
    return "incorrect";
  }
  return "loggedIn";
}