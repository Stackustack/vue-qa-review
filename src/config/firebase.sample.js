import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
    apiKey:             "fillMeWithFirebaseStuff",
    authDomain:         "fillMeWithFirebaseStuff",
    databaseURL:        "fillMeWithFirebaseStuff",
    projectId:          "fillMeWithFirebaseStuff",
    storageBucket:      "fillMeWithFirebaseStuff",
    messagingSenderId:  "fillMeWithFirebaseStuff"
});

export const db = firebaseApp.database();