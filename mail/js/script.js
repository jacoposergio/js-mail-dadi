// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// scrivo la lista di email registrate
const emailList = ['red@gmail.com','pink@gmail.com','white@gmail.com','blue@gmail.com','cyan@gmail.com','purple@gmail.com','orange@gmail.com','gray@gmail.com']; 

// chiedo all'utente la sua email 
const userEmail = prompt('Inserisci la tua email');

/*scorro nell'array in cerca dell' email dell'utente*/
// let emailFound = false 
// creo una costante thisEmail che corrisponde a ogni email dell'array.
// se thisEmail = userEmail allora 
// emailFound = true

let emailFound = false;
for(let i = 0; i < emailList.length; i++){
    const thisEmail = emailList[i];
   
    if(thisEmail === userEmail) {
        emailFound = true;
    }
}

// se l'email è presente nell'array, emailFound = true e stamperò il messaggio nel Dom
if(emailFound) {
    document.getElementById('user-message').innerHTML = 'La tua Email è già registrata';
} else {
    document.getElementById('user-message').innerHTML = 'Si prega di registrarsi';
}


