var firebaseConfig = {
      apiKey: "AIzaSyBQQo30GQ7R5d62ldC0Lz8VqXZV_lz9_SY",
      authDomain: "kwitter-41701.firebaseapp.com",
      databaseURL: "https://kwitter-41701-default-rtdb.firebaseio.com",
      projectId: "kwitter-41701",
      storageBucket: "kwitter-41701.appspot.com",
      messagingSenderId: "29129308953",
      appId: "1:29129308953:web:927b1174dde29a1ef62388"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
      });
}