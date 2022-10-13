//========Validação de E-mail

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  //==================CADASTRO PARA LOGIN============================

  function btLogin() {
    window.location.href = "/page/login.html";    
}

  //================LOGIN PARA CADASTRO==============================

  function btCadastrar() {
    window.location.href = "/page/cadastro.html";    
}

  //================DEPOIS DO CADASTRO==============================

  function cadastrar() {
    window.location.href = "/page/login.html";    
}

  //==============================================