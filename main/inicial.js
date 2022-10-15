//================DESFAZER LOGIN===================================



function btSair() {
    firebase.auth().signOut().then(()=>{
      window.location.href = "/page/login.html";
    }).catch(()=>{
      alert('erro ao sair!')
    })
  }

//=======================================

  firebase.auth().onAuthStateChanged(usuario =>{
    if (usuario) {
      findTransactions(usuario);
    }
  })

function novaTransacao() {
  window.location.href = "/page/transacao.html";
}

 function findTransactions(user) {
    firebase.firestore()
    .collection('transações')
    .where('usuario.uid', '==', user.uid)
    .orderBy('data', 'desc')  
    .get()
    .then(snapshot => {
      const transacoes = snapshot.docs.map(doc => doc.data());
      addTransactionsToScreen(transacoes);
    })
    .catch(error =>{
      console.log(error);
      alert('Erro ao recuperar transação.')
    })
 }

  function addTransactionsToScreen(transacoes) {
    const listaOrdenada = document.getElementById('transacoes');

    transacoes.forEach(transacao => {
        const li = document.createElement('li');
        li.classList.add(transacao.tipo);

        const data = document.createElement('p');
        data.innerHTML = formataData(transacao.data);
        li.appendChild(data);

        const dinheiro = document.createElement('p');
        dinheiro.innerHTML = dinheiroBr(transacao.dinheiro);
        li.appendChild(dinheiro);

        const tipoTransacao = document.createElement('p');
        tipoTransacao.innerHTML  = transacao.tipoTransacao;
        li.appendChild(tipoTransacao);

        if (transacao.descricao) {
          const descricao = document.createElement('p');
          descricao.innerHTML = transacao.descricao;
          li.appendChild(descricao);
        }


        listaOrdenada.appendChild(li);

    });

  }

  function formataData(data) {
    return new Date(data).toLocaleDateString('pt-br');
  }

  function dinheiroBr(dinheiro) {
    return `${dinheiro.moeda} ${dinheiro.valor.toFixed(2)}`
  }

/*
  const transacoesFake = [{
    tipo: 'despesa',
    data: '2022-01-01',
    dinheiro: {
      moeda: 'R$',
      valor: 34
    },
    tipoDaTransacao: 'Supermercado'
  },{
    tipo: 'ganho',
    data: '2022-02-05',
    dinheiro: {
      moeda: 'R$',
      valor: 5000
    },
    tipoDaTransacao: 'Salário',
    descricao: 'Empresa A'
  },{
    tipo: 'despesa',
    data: '2022-01-10',
    dinheiro: {
      moeda: 'EUR',
      valor: 40
    },
    tipoDaTransacao: 'Transporte',
    descricao: 'ida e volta ao trabalho'
  },{
    tipo: 'despesa',
    data: '2022-01-15',
    dinheiro: {
      moeda: 'USD',
      valor: 1000
    },
    tipoDaTransacao: 'Aluguel',
    descricao:'Mensalidade'
  }]

  */