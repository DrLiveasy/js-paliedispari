
/*Palindroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma e poi usate quella funzione appena dichiarata*/

//variabile per chieder all'utente di inserire la parola
let parolaInserita = prompt("inserisci una parola ");

//variabile per usare la funzione di invertire 
let parolaInversa = invertiParola(parolaInserita);

if(parolaInserita == parolaInversa){
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
    for (var i = daInvertire.length - 1; i >= 0; i--) {
        parolaInvertita += daInvertire[i];
    }
//faccio return della parola che è stata invertita
    return parolaInvertita;
}