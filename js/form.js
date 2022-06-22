var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    //Esse codigo está trazendo o formulário pro mundo Javascript
    var form = document.querySelector("#form-adiciona");

    var paciente = obterPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if(erros.length > 0) {
        criaMensagemErro(erros);
        form.reset();
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#lista-erros");
    mensagensErro.innerHTML = "";
    
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    //Este códgigo está trazendo a tabela inteira para o mundo Javascript
    var tabela = document.querySelector("#tabela-pacientes");
     //Este código está colocando a Tr criada junto com as Tds dentro da tabela
    tabela.appendChild(pacienteTr);
}

function obterPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    //Este código está criando a Tr (linha) do paciente
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //Este Bloco está criando as Tds (colunas) de informações do paciente

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    //Este bloco afiliando as Tds com a Tr, ou seja colocando as colunas dentro da linha 
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}


    
function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0) {
        erros.push("O campo de nome não pode estar em branco");
    }

    if(paciente.peso.length == 0) {
        erros.push("O campo de peso não pode estar em branco");
    }

    if(paciente.altura.length == 0) {
        erros.push("O campo de altura não pode estar em branco");
    }

    if(paciente.gordura.length == 0) {
        erros.push("O campo de gordura não pode estar em branco");
    }

    if(validaPeso(paciente.peso)){

    }else{

        erros.push("Peso Inválido!");
    }

    if(validaAltura(paciente.altura)){

    }else{

        erros.push("Altura Inválida!");
    }
    return erros;
}

function criaMensagemErro(erros) {

    var lista = document.querySelector("#lista-erros");
    lista.innerHTML = "";

    erros.forEach(function(erro) {
        var item = document.createElement("li");

        item.textContent = erro;
        lista.appendChild(item);
        lista.classList.add("mensagem-erro");
    });       

    return lista;

}
