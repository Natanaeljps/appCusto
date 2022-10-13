//========Validação de E-mail

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  //==============================================

  function btLogin() {
    window.location.href = "/page/login.html";    
}

  //==============================================

  function btCadastrar() {
    window.location.href = "/page/cadastro.html";    
}

  //==============================================