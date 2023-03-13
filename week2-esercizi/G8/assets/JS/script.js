/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const es1n1 = 17
const es1n2 =18

var bigger = (es1n1 > es1n2) ? es1n1 : es1n2;

document.getElementById('esercizio').innerHTML = 'Il numero maggiore è ' + bigger
console.log('es 1 - ' + 'Il numero maggiore è ' + bigger)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const esempio = 15;

var same = (esempio === 5) ? ' equal' : ' not equal';

// var same = (esempio !== 5) ? ' equal' : ' not equal'; 



document.getElementById('esercizio2').innerHTML = 'the two number are:' + same;
console.log('es 2 - ' + 'the two number are: ' + same)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const es3n1 = 15;
const es3n2 = 18;


var divisibile = (es3n1%5 === 0) ? ' divisibile per 5' : ' non divisibile per 5';
var divisibile2 = (es3n2%5 === 0) ? ' divisibile per 5' : ' non divisibile per 5';

document.getElementById('esercizio3').innerHTML = 'il numero è' + divisibile;

document.getElementById('esercizio3-2').innerHTML = 'il numero è' + divisibile2;

console.log('es 3 - ' + 'il numero è' + divisibile)
console.log('es 3 - ' + 'il numero è' + divisibile2)

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1 = 3;
const num2 = 5;

var verifica = (num1 == 8 || num2 == 8 || num1 + num2 == 8 || num1 - num2 == 8 || num1 - num2 == 8) ? 'giusto' : 'sbagliato';

document.getElementById('esercizio4').innerHTML = 'uno dei numeri è: ' + verifica
console.log('es 4 - ' + 'uno dei numeri è: ' + verifica)

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var totalShoppingCart = 51;
var spedizione = 10;
var totalCost;

if(totalShoppingCart > 50){
  totalCost = totalShoppingCart;
  document.getElementById('esercizio5').innerHTML = 'hai diritto alla spedizione gratuita' + ' ' + totalCost;
} 
else {
  totalCost = totalShoppingCart + 10;
 document.getElementById('esercizio5').innerHTML = 'Totale da pagare' + ' '+ totalCost;
}

console.log('es 5 - ' + 'hai diritto alla spedizione gratuita' + ' ' + totalCost)



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var totalShoppingCart2 = 100;
var sconto = totalShoppingCart2 * 0.2
var totalCost2
var totalShoppingCartscontato = totalShoppingCart2 - sconto
var spedizione = 10

if(totalShoppingCart2 > 50){
    totalCost2 = totalShoppingCart2 - sconto;
    document.getElementById('esercizio6').innerHTML = 'sconto applicato totale:' + ' ' + totalCost2;
  } 
  else {(totalShoppingCart2 <= 50)
    totalCost2 = totalShoppingCart2 - sconto + 10;
   document.getElementById('esercizio6').innerHTML = 'sconto applicato totale:' + ' '+ totalCost2;
  }

  console.log('es 6 - ' + 'sconto applicato totale:' + ' ' + totalCost2)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var es7n1 = 33; var es7n2 = 11; var es7n3 = 23; var riordiniamo = [es7n1, es7n2, es7n3]; 

document.getElementById('esercizio7').innerHTML += riordiniamo; riordiniamo.sort(); 
document.getElementById('esercizio7_').innerHTML += riordiniamo; 

console.log('Es. 7 - ' + 'Dal minore al maggiore: ' + riordiniamo);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const es8n1 = 1

document.
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

 me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */