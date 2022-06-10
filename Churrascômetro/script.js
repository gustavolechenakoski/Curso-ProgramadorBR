// Carne - 400 gr por pessoa  + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/água - 1000 ml por pessoa + 6 horas 1500ml
//pao de alho - 4 por pessoa
// Crianças valem por 0,5
// Incluir o pão de alho (opcional) diminuir a quantidade de carne
// Resultado os dados de entrada adultos, crianças e duração
// mudar para const o que puder mandar


let resultado = document.getElementById("resultado");

function calculoCarne(duracao, paoalhoSIM, adultos, criancas){
    
    let carneCalculo = carnePP(duracao, paoalhoSIM); 
    let qdtTotalCarne = carneCalculo * adultos + carneCalculo / 2 * criancas;

    console.log(carneCalculo, adultos, criancas);

    return qdtTotalCarne
}

function calculoCerveja(duracao, paoalhoSIM, adultos){

    let cervejaCalculo = cervejaPP(duracao, paoalhoSIM);
    let qdtTotalCerveja = cervejaCalculo * adultos;

    return qdtTotalCerveja
}

function calculoBebidas(duracao, paoalhoSIM, adultos, criancas){

    let bebidasCalculo = bebidasPP(duracao, paoalhoSIM);
    let qdtTotalBebidas = bebidasCalculo * adultos + bebidasCalculo / 2 * criancas;

    return qdtTotalBebidas
}

function calcular() {
    console.log("Calculando...")
    
    let adultos = document.getElementById("adultos").value;
    let criancas = document.getElementById("criancas").value;
    let duracao = document.getElementById("duracao").value;
    let paoalhoSIM = document.getElementById("paoalho-sim").checked

    let carne = calculoCarne(duracao, paoalhoSIM, adultos, criancas);
    let cerveja = calculoCerveja(duracao, paoalhoSIM, adultos);
    let bebidas = calculoBebidas(duracao, paoalhoSIM, adultos, criancas);

    resultado.innerHTML = `<p>${carne}g de Carne<p>`
    resultado.innerHTML += `<p>${cerveja}ml de Cerveja<p>`
    resultado.innerHTML += `<p>${bebidas}ml de Bebidas<p>`
    resultado.innerHTML += `<p>Adultos = ${adultos}<p>`
    resultado.innerHTML += `<p>Crianças = ${criancas}<p>`
    resultado.innerHTML += `<p>Duração (h) ${duracao}<p>`
}
  
function carnePP(duracao, paoalhoSIM) {
    let carne = 400;

    if(duracao >= 6) {
        carne = 650;
    }

    if(paoalhoSIM === true) {
        carne = carne - 200;
    }

    return carne;
}

function cervejaPP(duracao, paoalhoSIM) {
    let cerveja = 1200;

    if(duracao >= 6) {
        cerveja = 2000;
    }

    if(paoalhoSIM === true) {
        cerveja = cerveja - 600;
    }

    return cerveja;
}

function bebidasPP(duracao, paoalhoSIM) {
    let bebida = 1000;

    if(duracao >= 6) {
        bebida = 1500;
    }

    if(paoalhoSIM === true) {
        bebida = bebida - 500;
    }

    return bebida;
}


