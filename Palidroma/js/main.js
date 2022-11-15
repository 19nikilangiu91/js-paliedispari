// Chiediamo all'utente di inserire una parola.

const parolaUtente = prompt("Inserisci una parola");

console.log(parolaUtente);

// Andiamo a creare una variabile per la nostra "Parola Splittata".

let parolaSplit = parolaUtente.split("");

console.log(parolaSplit);

// Andiamo a creare una variabile per revertire la nostra "Parola Split".

parolaSplit = parolaSplit.reverse("");

console.log(parolaSplit);

// Andiamo a creare una variabile per unire e revertire la nostra "Parola Split" e portarla all'origine.

let parolaReverse = parolaSplit.join("");
console.log(parolaReverse);

// Andiamo a creare una variabile per il nostro "risultato".

let risultato = parolaRandom(parolaUtente);
console.log(risultato);

// Andiamo a creare la nostra "Funzione".

function parolaRandom(utenteParola){

    // let output = "";

    if(parolaUtente == parolaReverse){
        // output = "la parola è palindroma";
        return "la parola è palindroma";

    } else{
        // output = "la parola non è palindroma";
        return "la parola non è palindroma";
    }
}
