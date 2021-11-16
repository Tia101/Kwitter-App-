
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyAzfrH5vTmrZIkRYVFzA1HX5XqOsF-cumQ",
      authDomain: "kwitter-79b72.firebaseapp.com",
      databaseURL: "https://kwitter-79b72-default-rtdb.firebaseio.com",
      projectId: "kwitter-79b72",
      storageBucket: "kwitter-79b72.appspot.com",
      messagingSenderId: "627193598103",
      appId: "1:627193598103:web:e9144230309a41be11d9d2",
      measurementId: "G-KWJT1PVTM2"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
