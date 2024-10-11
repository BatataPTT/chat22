  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCzI_nGXv0Oj0MzMNxthS5m42yFx070o-A",
    authDomain: "chat-4272f.firebaseapp.com",
    databaseURL: "https://chat-4272f-default-rtdb.firebaseio.com",
    projectId: "chat-4272f",
    storageBucket: "chat-4272f.appspot.com",
    messagingSenderId: "187202754618",
    appId: "1:187202754618:web:0a12d69d6e6193df2f7d03",
    measurementId: "G-8TKSLG7M9L"
  };

  const app = initializeApp(firebaseConfig);
  const db = firebase.database();

  document.getElementById("btn").addEventListener('click', function(){
    const message = document.getElementById("msg").value;
    const messageRef = database.ref('Chat').push();
    messageRef.set({ text: message });
document.getElementById("msg").value = '';
  });