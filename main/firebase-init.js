
const firebaseConfig = {
    apiKey: "AIzaSyBDOelMQ5Sr3yAIxsi-zWlEv1tLiLsjDrc",
    authDomain: "receitascustos.firebaseapp.com",
    projectId: "receitascustos",
    storageBucket: "receitascustos.appspot.com",
    messagingSenderId: "238471214004",
    appId: "1:238471214004:web:22bff801de09e2c69678e1"
};
firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged( user => {
    if (user) {
      window.location.href = "/page/inicial.html";
    }
  })