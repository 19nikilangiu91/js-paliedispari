// Chiediamo all'utente di scegliere un numero da "1" a "5".

let userNumber = parseInt(prompt("Scegli un numero da '1' a '5'"));

console.log("Questo è il mio numero", userNumber);

// Chiediamo all'utente di scegliere "pari" o "dispari".

let userScelta = prompt("Scegli pari o dispari");

console.log("Questa è la mia scelta:", userScelta);

// Andiamo a creare una variabile per il "Pc".

let randomPC = numeroRandom();

console.log("Il numero generato per il Pc è:", randomPC);

//Andiamo a creare una funzione per generare un numero "random" per il pc.

function numeroRandom(numeroPc){

    let numberPc = Math.floor(Math.random() * 5) + 1;

    return numberPc;
}

// Andiamo a sommare lo userNumber + randomPc.

let somma = userNumber + randomPC;

console.log("La somma dei due numeri è: ", somma);

// Andiamo a creare la nostra variabile "risultato".

let risultato = pariDispari(somma);
console.log(risultato);

// Andiamo a creare la funzione se la somma sarà pari o dispari.

function pariDispari(){
    if(somma % 2 === 0){
        return "La somma è pari";
    }else{ 
        return "La somma è dispari";
    }
}

// Andiamo a creare una variabile per decretare il vincitore.

if(userScelta === risultato){
    console.log("Hai Vinto");
}else{
    console.log("Mi dispiace hai perso!");
}
