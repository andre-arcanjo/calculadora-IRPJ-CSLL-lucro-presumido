const aliquotas = {
    irpj: 0.15,
    csll: 0.09,
    adicionalIrpj: 0.1,
    presuncaoReceitaVendasIrpj: 0.08,
    presuncaoReceitaVendasCsll: 0.12,
    presuncaoAluguelServicos: 0.32
}

const limiteAdicional = 60000;

const calcular = document.getElementById('calcular');
const totalReceitaVendas = document.querySelector('.total-receita-vendas');
const totalAluguelServicos = document.querySelector('.total-aluguel-servicos');
const totalOutrasReceitas = document.querySelector('.total-outras-receitas');
const totalIrpjRetido = document.querySelector('.total-irpj-retido');
const totalCsllRetida = document.querySelector('.total-csll-retida');
const bcIrpj = document.querySelector('.bc-irpj');
const bcCsll = document.querySelector('.bc-csll');
const adicional = document.querySelector('.adicional');

function somarMeses(ids) {
    return ids.reduce((total, id) => total + (+document.getElementById(id).value || 0), 0);
}

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function validarInputs() {
    let inputs = document.querySelectorAll('input');
    let mensagemValidacao = document.querySelector('.validacao')

    let inputsValidados = true;

    mensagemValidacao.classList.remove('mostrar')

    inputs.forEach((input) => {
        if (+input.value < 0) {
            inputsValidados = false;
            input.classList.add('input-nao-preenchido');
            mensagemValidacao.textContent = "Valores não podem ser negativos.";
            mensagemValidacao.classList.add('mostrar')
        } else {
            input.classList.remove('input-nao-preenchido');
        }
    })

    return inputsValidados;
}

calcular.addEventListener('click', () => {

    if (!validarInputs()) {
        return;
    }

    const somaReceitaVendas = somarMeses(['receita-vendas-mes1', 'receita-vendas-mes2', 'receita-vendas-mes3']);
    const somaAluguelServicos = somarMeses(['aluguel-servicos-mes1', 'aluguel-servicos-mes2', 'aluguel-servicos-mes3']);
    const somaOutrasReceitas = somarMeses(['outras-receitas-mes1', 'outras-receitas-mes2', 'outras-receitas-mes3']);
    const somaIrpjRetido = somarMeses(['irpj-retido-mes1', 'irpj-retido-mes2', 'irpj-retido-mes3']);
    const somaCsllRetida = somarMeses(['csll-retida-mes1', 'csll-retida-mes2', 'csll-retida-mes3']);

    const somaBcIr = somaReceitaVendas * aliquotas.presuncaoReceitaVendasIrpj + somaAluguelServicos * aliquotas.presuncaoAluguelServicos + somaOutrasReceitas;

    const somaBcCs = somaReceitaVendas * aliquotas.presuncaoReceitaVendasCsll + somaAluguelServicos * aliquotas.presuncaoAluguelServicos + somaOutrasReceitas;

    const adicionalIrpj = somaBcIr > limiteAdicional ? (somaBcIr - limiteAdicional) * aliquotas.adicionalIrpj : 0;
    const valorIrpj = somaBcIr * aliquotas.irpj + adicionalIrpj - somaIrpjRetido;
    const valorCsll = somaBcCs * aliquotas.csll - somaCsllRetida;
    document.getElementById('valor-irpj-numero').textContent = formatarMoeda(valorIrpj);
    document.getElementById('valor-csll-numero').textContent = formatarMoeda(valorCsll);

    totalReceitaVendas.textContent = `Total: ${formatarMoeda(somaReceitaVendas)}`;
    totalAluguelServicos.textContent = `Total: ${formatarMoeda(somaAluguelServicos)}`;
    totalOutrasReceitas.textContent = `Total: ${formatarMoeda(somaOutrasReceitas)}`;
    totalIrpjRetido.textContent = `Total: ${formatarMoeda(somaIrpjRetido)}`;
    totalCsllRetida.textContent = `Total: ${formatarMoeda(somaCsllRetida)}`;
    bcIrpj.textContent = `Base de cálculo IRPJ: ${formatarMoeda(somaBcIr)}`;
    bcCsll.textContent = `Base de cálculo CSLL: ${formatarMoeda(somaBcCs)}`;
    adicional.textContent = `Adicional: ${formatarMoeda(adicionalIrpj)}`;
    document.getElementById('valor-irpj-numero').textContent = formatarMoeda(valorIrpj);
    document.getElementById('valor-csll-numero').textContent = formatarMoeda(valorCsll);

});