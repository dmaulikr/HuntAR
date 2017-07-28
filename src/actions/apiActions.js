import * as firebase from "firebase";


if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyALfFSMM-r5cVc-GxcUNf0RzvheeUIGr3c",
      authDomain: "huntar-3db6a.firebaseapp.com",
      databaseURL: "https://huntar-3db6a.firebaseio.com",
      storageBucket: "huntar-3db6a.appspot.com"});
}

export async function register(form) {
   try {
     let response =  await firebase.auth()
           .createUserWithEmailAndPassword(form.email, form.pass);
           return (response)
   } catch (error) {
           return (error)
   }
}

export async function signin(form) {
   try {
     let response =  await firebase.auth()
           .signInWithEmailAndPassword(form.email, form.password);
            return (response)
   } catch (error) {
            return (error)
   }
}

export async function signOut(form) {
   try {
     let response =  await firebase.auth()
           .signOut();
            return (response)
   } catch (error) {
            return (error)
   }
}


export async function saveCharacters(uid, characters) {

  var database = firebase.database();
  firebase.database().ref('users/' + uid + '/characters').set({
      characters: characters,
    });
}
