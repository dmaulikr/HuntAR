import * as firebase from "firebase";
// start firebase connection if it hasnt been started yet - works
if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyALfFSMM-r5cVc-GxcUNf0RzvheeUIGr3c",
      authDomain: "huntar-3db6a.firebaseapp.com",
      databaseURL: "https://huntar-3db6a.firebaseio.com",
      storageBucket: "huntar-3db6a.appspot.com"});
}

const database = firebase.database();

// register - should work untested
export async function register(form) {
   try {
     let response =  await firebase.auth()
           .createUserWithEmailAndPassword(form.email, form.pass);
           return (response)
   } catch (error) {
           return (error)
   }
}

//signin - works
export async function signin(form) {
   try {
     let response =  await firebase.auth()
           .signInWithEmailAndPassword(form.email, form.password);
            return (response)
   } catch (error) {
            return (error)
   }
}

//should work not tested
export async function signOut(form) {
   try {
     let response =  await firebase.auth()
           .signOut();
            return (response)
   } catch (error) {
            return (error)
   }
}


//save characters - works
// needs to tweaked so there isnt that double key
export async function saveCharacters(uid, characters) {
  var database = firebase.database();
  firebase.database().ref('users/' + uid + '/characters').set({
      characters
    });
}

// save combat instance - works
export async function createCombatInstance(uid, combatInstance) {
  var database = firebase.database();
  firebase.database().ref('users/' + uid + '/combat').set({
      combatInstance
    });
}

// save position - works
export async function savePostion(uid) {

  var database = firebase.database();
  firebase.database().ref('users/' + uid + '/postion').set({

    });
}
