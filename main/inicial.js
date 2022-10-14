//================DESFAZER LOGIN===================================

function btSair() {
    firebase.auth().signOut().then(()=>{
      window.location.href = "/page/login.html";
    }).catch(()=>{
      alert('erro ao sair!')
    })
  }


  findTransactions();

  function findTransactions() {
    setTimeout(()=>{
      addTransactionsToScreen(transacoesFake);
    }, 1000)
  }

  function addTransactionsToScreen(transacoes) {
    const listaOrdenada = document.getElementById('transacoes');

    transacoes.forEach(transacao => {
        const li = document.createElement('li');
        li.classList.add(transacao.tipo);

        const data = document.createElement('p');
        data.innerHTML = formataData(transacao.data);
        li.appendChild(data);


        listaOrdenada.appendChild(li);

    });

  }

  function formataData(data) {
    return new Date(data).toLocaleDateString('pt-br');
  }


  const transacoesFake = [{
    tipo: 'despesa',
    data: '2022-01-01',
    dinheiro: {
      moeda: 'R$',
      valor: 34
    },
    tipoDaTransacao: 'Supermercado'
  }, {
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
      valor: 40.50
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