function onChangeDate() {
    const data = form.data().value;
    form.semData().style.display = !data ? "block" : "none";

}

function onChangeValue() {
    const valor = form.valor().value;
    form.semValor().style.display = !valor ? "block" : "none";

    form.valorMaiorZero().style.display = valor <=0 ? 'block' : 'none';
}

const form = {
    data: () => document.getElementById('data'),
    semData: () => document.getElementById('sem_data'),

    valor: () => document.getElementById('valor'),
    semValor: () => document.getElementById('sem_valor'),
    valorMaiorZero: () => document.getElementById('valor_maior_zero'),

    tipoTransacao: () => document.getElementById('tipo_transacao'),
    semTransacao: () => document.getElementById('sem_tipo_transacao'),

}