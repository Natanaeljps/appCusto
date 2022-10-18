if (!isNewTransaction()) {
    const uid = getTransationUid();
    findTransactionByUid(uid);
}

function getTransationUid() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('uid');
}

function isNewTransaction() {
    return getTransationUid() ? false : true;
}

function findTransactionByUid() {
    firebase.firestore()
    .collection("transações")
    .doc(uid)
    .get()
    .then(doc => {
        if (doc.exists) {
            fillTransactionScreen(doc.data());
        }else{
            alert ("Documento não encontrado");
            window.location.href = "/page/inicial.html";
        }
    })
    .catch(() => {
        alert ("Erro ao recuperar documento");
        window.location.href = "/page/inicial.html";
    })

    }

    function fillTransactionScreen(transacao) {
        toggleSaveButtonDisable();
        if (transacao.tipo == "despesa") {
            form.tipoDespesa().checked = true;
        }else{
            form.tipoGanho().checked = true;
        }

        form.data().value = transacao.data;
        form.moeda().value = transacao.dinheiro.moeda;
        form.valor().value = transacao.dinheiro.valor;
        form.tipoTransacao().value = transacao.tipoTransacao;
        }

        if (transcao.descricao) {
            form.descricao().value = transacao.descricao;
        }




function saveTransaction() {


    const transacao = createTransaction();

    firebase.firestore()
        .collection('transações')
        .add(transacao)
        .then(()=> {
            window.location.href = "/page/inicial.html";
        })
        .catch(()=>{
            alert('Erro ao salvar transação!');
        })


    }

    function createTransaction() {
        return{
            tipo: form.tipoDespesa().checked ? "despesa" : "ganho",
            data: form.data().value,
            dinheiro: {
                moeda: form.moeda().value,
                valor: parseFloat(form.valor().value)
            },
            tipoTransacao: form.tipoTransacao().value,
            descricao: form.descricao().value,
            usuario: {
                uid: firebase.auth().currentUser.uid
            }
            
    
        };
    }

                



function onChangeDate() {
    const data = form.data().value;
    form.semData().style.display = !data ? "block" : "none";

    toggleSaveButtonDisable(); 

}

function onChangeValue() {
    const valor = form.valor().value;
    form.semValor().style.display = !valor ? "block" : "none";

    form.valorMaiorZero().style.display = valor <=0 ? 'block' : 'none';

    toggleSaveButtonDisable(); 
}

function onChangeTransactionType() {
    const tipoTransacao = form.tipoTransacao().value;
    form.semTransacao().style.display = !tipoTransacao ? 'block' : 'none';

    toggleSaveButtonDisable();
}


function toggleSaveButtonDisable() {
    form.btSalvar().disabled = !formValido();
}

function formValido() {
    const data = form.data().value;
    if (!data) {
        return false;
    }

    const valor = form.valor().value;
    if (!valor || valor <=0) {
        return false;
    }

    const tipoTransacao = form.tipoTransacao().value;
    if (!tipoTransacao) {
        return false;
    }

    return true;
}

const form = {
    tipoDespesa: () => document.getElementById('despesa'),
    tipoGanho: () => document.getElementById('ganho'),

    data: () => document.getElementById('data'),
    semData: () => document.getElementById('sem_data'),

    valor: () => document.getElementById('valor'),
    semValor: () => document.getElementById('sem_valor'),
    valorMaiorZero: () => document.getElementById('valor_maior_zero'),
    moeda: () => document.getElementById('moeda'),

    tipoTransacao: () => document.getElementById('tipo_transacao'),
    semTransacao: () => document.getElementById('sem_tipo_transacao'),

    descricao: () => document.getElementById('descricao'),

    btSalvar: () => document.getElementById('bt_salvar'),

}