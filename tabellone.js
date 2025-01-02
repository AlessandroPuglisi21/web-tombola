let numeriUsciti = [];

function generaNumeri() {
    const numeri = [];
    for (let i = 1; i <= 90; i++) { 
        numeri.push(i);
    }
    return numeri;
}

const numeri = generaNumeri();
const tabellone = document.getElementById('tabellone');

numeri.forEach(numero => {
    const div = document.createElement('div');
    div.classList.add('numero');
    div.textContent = numero;
    tabellone.appendChild(div);
});

function randomNumber(max){
    const numberExtracted = Math.floor(Math.random() * max ) + 1;
    return numberExtracted
    
}

function estraiNumero() {
    const numeroEstratto = randomNumber(90);
    if (!numeriUsciti.includes(numeroEstratto)) {
        numeriUsciti.push(numeroEstratto);


    document.getElementById('extractedNumber').textContent = numeriUsciti.join('-');
    document.getElementById('numeroEstratto').textContent = numeroEstratto;

    console.log(numeriUsciti);
    } 
}




console.log(numeri);
