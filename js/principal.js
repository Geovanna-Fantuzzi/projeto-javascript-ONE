
var titulo = document.querySelector(".titulo"); 

titulo.textContent = "Nutricionista";

//O programa começa aqui...

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;

    var altura = paciente.querySelector(".info-altura").textContent;

    var tdimc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValido = validaAltura(altura);

    if(!pesoValido) {
        pesoValido = false;
        tdimc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaValido) {
        alturaValido = false;
        tdimc.textContent = "Altura inválida!";
        paciente.style.backgroundColor = "lightcoral";
    }

    if(pesoValido && alturaValido) {
        var imc = calculaImc(peso, altura);

        tdimc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso > 0 && peso < 1000){
        return true;
    }else{
        return false
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 3.0){
        return true;
    }else{
        return false
    }
}