firebase.auth().onAuthStateChanged( user => {
    if (!user) {
      window.location.href = "/page/login.html";
    }
  })