//esercizio1
const esercizio1 = document.getElementById('concatena');
//esercizio2
const esercizio2 = document.getElementById('concatena2');
//esercizio3
const esercizio3 = document.getElementById('concatena3');

var nome = 'Aldo'; 
let ruolo = 'cliente';
const pgreco = '3.14';

var unica = nome + ', ' + ruolo + ', ' + pgreco; //concatenamento

esercizio1.innerHTML = nome + ', ' + ruolo + ', ' + pgreco;
esercizio2.innerHTML = unica;

var nome1 = 'Mario' // valore di partenza
document.getElementById('var').innerHTML = nome1; //valore di partenza

{
    let nome1 = 'Carla';//valore modificato solo in gruppo
    document.getElementById('let').innerHTML = nome1;//comando di stampa Da gruppo

}
document.getElementById('final').innerHTML = nome1; //valore di partenza


var nome2 = 'Carla' // valore di partenza

{
    let nome2 = 'Mario'; //valore modificato solo in gruppo
    document.getElementById('let2').innerHTML = nome2; //comando di stampa Da gruppo

}

document.getElementById('let3').innerHTML = nome2; //valore di partenza
document.getElementById('final2').innerHTML = nome2; //valore di partenza

//esercizio 4

const iniziale = 15
document.getElementById('iniziale').innerHTML = iniziale; //valore di partenza

var addizione = iniziale+15
document.getElementById('valore1').innerHTML = + addizione + ', ' + (++ addizione); 

var sottrazione = iniziale-10
document.getElementById('valore2').innerHTML = + sottrazione + ', ' + (--sottrazione); 

var moltiplicazione = iniziale*3
document.getElementById('valore3').innerHTML = moltiplicazione

var divisione = iniziale/3
document.getElementById('valore4').innerHTML = divisione

document.getElementById('valore5').innerHTML = iniziale + ' è un numero'









 