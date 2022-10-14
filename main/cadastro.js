//====== Entrar direto quando usuário estiver logado ========

firebase.auth().onAuthStateChanged(user => {
    if (user) {
      window.location.href = "/page/inicial.html";
    }
  });

//====== E-mail validade ========

function onChangeEmail() {
    const email = form.boxEmail().value;
    form.semEmail().style.display = email ? "none" : "block";

    form.emailInvalido()
    .style.display = validateEmail(email) ? "none" : "block";
    toggleRegisterButtonDisable();

}

//====== Senhas validade ========

function onChangeSenha() {
    const senha = form.boxSenha().value;
    form.semSenha().style.display = senha ? "none" : "block";

    form.senhaInvalido()
    .style.display = senha.length >= 6 ? "none" : "block";

    validarSenha(); 
    toggleRegisterButtonDisable();

}

//====== Confirmar senhas ========

function onChangeCoSenha() {
    validarSenha();
    toggleRegisterButtonDisable();
}

//====== Cadastar usuário (Firebase) ========

function cadastrar() {
    const email = form.boxEmail().value;
    const senha = form.boxSenha().value;
    firebase.auth().createUserWithEmailAndPassword(
        email, senha
    ).then(()=>{
        window.location.href = "/page/inicial.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    })
}

function getErrorMessage(error) {
    if (error.code == "auth/email-already-in-use") {
        return "Email já em uso."
    }
    return error.message;
}

//====== confirmar Senhas ========

function validarSenha() {
    const senha =  form.boxSenha().value;
    const confirmaSenha = form.boxCoSenha().value;
    
    form.senhasDiferentes()
    .style.display = senha == confirmaSenha ? "none" : "block";
}

//====== habilitar e Desabilitar o botão cadastar ========
function toggleRegisterButtonDisable() {
    form.cadastrar().disabled = !isFormValid();
}

function isFormValid() {
    const email = form.boxEmail().value;
    if (!email || !validateEmail(email)) {
        return false;
    }

    const senha = form.boxSenha().value;
    if (!senha || senha.length < 6) {
        return false;
    }

    const confirmaSenha = form.boxCoSenha().value;
    if (senha != confirmaSenha) {
        return false;
    }

    return true;
}


const form = {
    boxCoSenha: ()=> document.getElementById('boxCoSenha'),
    boxEmail: ()=> document.getElementById('boxEmail'),
    semEmail: ()=> document.getElementById('sem_email'),
    emailInvalido: ()=> document.getElementById('email_invalido'),
    senhasDiferentes: ()=> document.getElementById("senhas_diferentes"),

    boxSenha: ()=> document.getElementById('boxSenha'),
    semSenha: ()=> document.getElementById('sem_senha'),
    senhaInvalido: ()=> document.getElementById('senha_invalido'),
    cadastrar: ()=> document.getElementById('cadastrar'),
}