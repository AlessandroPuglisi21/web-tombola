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
    return Math.floor(Math.random() * max ) + 1;
}

function estraiNumero(){
    const numeroEstratto = randomNumber(90)
    const numeroEstrattoElement = document.getElementById('numeroEstratto')
    numeroEstrattoElement.textContent = `${numeroEstratto}`
}



console.log(numeri);
