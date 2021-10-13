/* Consegna:
Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell'indice
per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
Nota: la ripetizione del codice è intenzionale per scopo didattico.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per ?
    Abbiamo visto qualcosa di particolare che possiamo usare ?
        Come creare nuovi elementi html e appenderli al container ?
            Consigli del giorno:
 scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
 proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */


const ul = document.querySelector('ul.list');


for (let i = 1; i <= 100; i++) {
    const macaco = `<li class = "box box--${i}">${i}</li>`;
    ul.innerHTML += macaco;
    if (i % 3 === 0) {

    }
}

