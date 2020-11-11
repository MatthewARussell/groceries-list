// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
apiKey: "AIzaSyBPIrziljsPZrg40EUPY8y79BkiSJpFwM4",
  authDomain: "server-1-0-0.firebaseapp.com",
  databaseURL: "https://server-1-0-0.firebaseio.com",
  projectId: "server-1-0-0",
  storageBucket: "server-1-0-0.appspot.com",
  messagingSenderId: "90869535296",
  appId: "1:90869535296:web:23fab0861e50308d3205a5",
  measurementId: "G-EGL6KNJN8S"
};

firebase.initializeApp(firebaseConfig);
$("#save").click(function(){
  $('li').each(function(){
    var value =$(this).text();
    console.log(value);
     firebase.firestore().collection('mylist').add({
    item: value
  })
  })
});




// Save the list to database
