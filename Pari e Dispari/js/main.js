// Chiediamo all'utente di scegliere un numero da "1" a "5".
let userNumber = parseInt(prompt("Scegli un numero da '1' a '5'"));

console.log("Questo è il mio", userNumber);

// Chiediamo all'utente di scegliere "pari" o "dispari".
let userScelta;

while((userScelta !== "pari") && (userScelta !== "dispari")){
userScelta = prompt("Scegli pari o dispari");
}

console.log("la mia scelta e:", userScelta);