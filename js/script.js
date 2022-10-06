/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

//Dati
const ticketPrice = 0.21;

//Chiedere al cliente i km da percorrere e la sua età e convertirli in numeri
const userAge = parseInt(prompt("Inserisci la tua età"));
console.log(userAge, typeof(userAge));

const userDistance = parseInt(prompt("Inserisci la distanza in km"));
console.log(userDistance,  typeof(userDistance));
//Calcolare il prezzo base del suo biglietto
//Calcolare lo sconto per gli over 65
//SE l'utente ha meno di 18 anni 
    //-Calcolare lo sconto (prezzo del biglietto base + sconto del 20%)
//ALLORA SE l'utente ha più di 65 anni
    //-Calcolare lo sconto (prezzo del biglietto base + sconto del 40%)
//ALTRIMENTI
    //-Messaggio con prezzo base del biglietto