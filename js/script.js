// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
var arrayNumeriCasualiPc = [];
var maxNumeriCasuali = 16;

while (arrayNumeriCasualiPc.length < maxNumeriCasuali) {
  // console.log(numeriCasualiPc.length);
  var bomba = getRandomIntInclusive(1, 100);
  if (inArray(arrayNumeriCasualiPc, bomba) != true) {
    arrayNumeriCasualiPc.push(bomba);
  }
}

console.log(arrayNumeriCasualiPc);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. var maxTentativi in seguito dovrà essere 100-16(84)
// L’utente non può inserire più volte lo stesso numero.
var arrayUtente = [];
var maxTentativi = 5;
var punteggio = 0;
var i = 0;
var trovato = false;

while (i < maxTentativi && trovato == false) {
  var numUtente = parseInt(prompt("Inserisci un numero"));

// devo controllare che il numero inserito dall'utente non si ripeta, che non sia contenuto nell'array dei numeri casuali e se non è contenuto in questo array lo devo pushare al suo interno

    if(isInRange(1, 100, numUtente) == true && inArray(arrayNumeriCasualiPc, numUtente) == false && inArray(arrayUtente, numUtente) == false) {
      arrayUtente.push(numUtente);
      punteggio++;
    }

// se il numero è presente nella lista dei numeri generati, la partita termina
    if (inArray(arrayNumeriCasualiPc, numUtente)) {
      console.log("Hai perso");
      trovato = true;
    }
}
console.log(arrayNumeriCasualiPc, arrayUtente);


// se l'utente è riuscito a inserire tanti numeri quanti sono i tentativi consentiti ha vinto
if (punteggio == maxTentativi) {
  console.log('Hai vinto');
}


// altrimenti si continua chiedendo all’utente un altro numero.



// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.


// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
console.log(punteggio);


// funzioni
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function inArray(array, elemento){
  var i = 0;
  var trovato = false;
  while (i < array.length) {
    if (array[i] == elemento) {
      trovato = true;
    }
    i++
  }
  return trovato;
}


function isInRange(min, max, num) {
  if(num < min || num > max || isNaN(num)) {
    return false;
  }
  return true;
}



// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
