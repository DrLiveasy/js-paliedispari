
/*Palindroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma e poi usate quella funzione appena dichiarata*/

//variabile per chieder all'utente di inserire la parola

let parolaInserita = prompt("inserisci una parola ");

//variabile per usare la funzione di invertire 
let parolaInversa = invertiParola(parolaInserita);

if(parolaInserita === parolaInversa){
    document.write(`
    <h1>"la parola inserita è palindroma"</h1>
    `);

}else{
    document.write(`
    <h1>"la parola inserita non è palindroma"</h1>
    `);
}

//funzione pre invertire la parola 
function invertiParola(daInvertire){
//variabile vuota per inserira la nuova parola quando viene invertita
    let parolaInvertita = "";
//un loop che parte dall'ultima lettera della palora iserita fino alla prima cioè converte la parola al contrario 
    for (var i = daInvertire.length - 1 ; i >= 0 ; i--) {
        parolaInvertita += daInvertire[i];
    }// i = lunghezza della parola  - 1 = 4  parolaInvertita = "" + "l'ultima lettera" = "l'ultima lettera"
//faccio return della parola che è stata invertita
    return parolaInvertita;
}



/*Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

/*
//variabile input che chiede all'utente in prompt di inserire i dati
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

let numeroComputer = numeroRandom(1,5);

let somma = numeroComputer + numeroUtente ;

pariDispari(somma);

if(numeroComputer % 2 == 0 & numeroUtente % 2 == 0 ){
    console.log("hai vinto !");
}else if(numeroComputer % 2 != 0 & numeroUtente % 2 != 0 ){
    console.log("hai vinto!");
}else{
    console.log("hai perso!");
}

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function pariDispari(n1){
    if (n1 % 2 == 0 ){
        console.log("Pari");
    }else{
        console.log("dispari");
    }
}*/