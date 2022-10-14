
//====== Entrar direto quando usuário estuver logado ==========================================
/*
firebase.auth().onAuthStateChanged( user => {
  if (user) {
    window.location.href = "/page/inicial.html";
  }
})
*/
//=================AUTENTICAÇões================================================================
function onChangeEmail(){
    toggleButtonsDisable();
    toggleEmailErrors();
    
  }
  
  function onChangeSenha(){
    toggleButtonsDisable();
    togglePasswordErrors();  
  }
    
  
  function eEmailValido() {
    const boxEmail = form.boxEmail().value;
    if (!boxEmail) {
      return false;
    }
    return validateEmail(boxEmail);
  }

//=================AUTENTICAÇÃO DE USUÁRIO NO LOGIN================================================================


function login() {
  firebase.auth().signInWithEmailAndPassword(
      form.boxEmail().value, form.boxSenha().value
  ).then(response => {
      window.location.href = "/page/inicial.html";
  }).catch(error => {
      alert(getErrorMessage(error));
  });
}

function getErrorMessage(error) {
  if (error.code == "auth/user-not-found") {
    return "Usuário não encontrado";
  }else if(
    error.code == "auth/wrong-password"){
    return "Senha errada";
    }
  return error.message;
}

//=================================================================================

  function toggleEmailErrors() {
    const boxEmail = form.boxEmail().value;
    form.sem_email().style.display = boxEmail ? "none" : "block";
  
    form.email_invalido().style.display = validateEmail(boxEmail) ? "none" : "block";
      
  }
  
  function togglePasswordErrors() {
    const boxSenha = form.boxSenha().value;
    form.sem_senha().style.display = boxSenha ? "none" : "block";
  
  }
  
  
  function eSenhaValida() {
    const boxSenha = form.boxSenha().value;
    if(!boxSenha){
      return false;
    }
    return true;
  }
  
  function toggleButtonsDisable() {
    const emailValido = eEmailValido();
    form.recSenha().disabled = !emailValido;
  
    const senhaValido = eSenhaValida();
    form.logar().disabled = !emailValido || !senhaValido;
  }
  
  
  
  const form = {
    boxEmail:()=> document.getElementById('boxEmail'),
    boxSenha:()=> document.getElementById('boxSenha'),
    sem_email:()=> document.getElementById('sem_email'),
    sem_senha:()=> document.getElementById('sem_senha'),
    email_invalido:()=> document.getElementById('email_invalido'),
    recSenha:()=> document.getElementById('recSenha'),
    logar:()=> document.getElementById('logar'),
  }


 