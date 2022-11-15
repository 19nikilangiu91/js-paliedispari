// Chiediamo all' utente di scegliere un numero da "1" a "5".

let userNumber = parseInt(prompt("Inserisci un numero da '1' a '5' "));
console.log("Il mio numero è", userNumber);

// Chiediamo all'utente di scegliere "pari" o "dispari".

let userScelta = prompt("Scegli pari o dispari");
console.log( "La mia scelta è:",userScelta);


// Andiamo a creare una variabile per il "Pc".

let randomPc = numeroRandom();
console.log("Il numero generato per il pc è: ",randomPc);


// Andiamo a creare una funzione per generare un numero "random per il pc".

function numeroRandom(){

    let numberPc = Math.floor(Math.random() * 5) + 1;

    return numberPc;
}

// Andiamo a sommare l'"userNumber + randomPc".

let somma = userNumber + randomPc;
console.log("la somma totale è:",somma);

// Andiamo a creare la nostra variabile "risultato".

let risultato = pariDispari();
console.log("Il risultato è: ", risultato);

// Andiamo a creare la funzione se la somma sarà pari o pariDispari.

function pariDispari(){
    if(somma % 2 === 0){
        return "pari";
    }else{
        return "dispari";
    }
}

// Andiamo a creare una condizione per decretare il vincitore.

if(userScelta === risultato){
    document.getElementById("output").innerHTML = ` Complimenti, hai vinto!!!
    Hai scelto il numero: "${userNumber}", la tua scelta è: "${userScelta}" e la somma totale è: "${somma}"`;
}else{
    document.getElementById("output").innerHTML = "Mi dispiace, Hai perso!";
}
