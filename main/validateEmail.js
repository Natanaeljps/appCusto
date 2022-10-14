//========Validação de E-mail

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  //==================CADASTRO PARA LOGIN============================

  function btLogin() {
    window.location.href = "/page/login.html";    
}

  

//===================================================================