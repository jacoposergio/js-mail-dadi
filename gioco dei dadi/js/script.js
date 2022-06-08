/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

// generiamo un numero per l'utente 
// generiamo un numero per il computer
// se il num utente> num computer allora avrà vinto l'utente
// se il num utente< num computer allora avrà vinto il computer
// se no sarà pari

const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click',
    function() {
        // chiedere all'utente di generare un numero
        let userNumber = parseInt(Math.floor(Math.random() * 6) + 1 );

        // generare anche il numero del computer
        let computerNumber = parseInt(Math.floor(Math.random() * 6) + 1 );

        // stampo i numeri
        document.getElementById('your-number').innerHTML = `Il tuo numero è ${userNumber}`;
        document.getElementById('computer-number').innerHTML =`Il numero del computer è ${computerNumber}`;
        // rendo visibili le classi css (per decorare i messaggi)
        document.querySelector('#your-number').classList.add('visible');
        document.querySelector('#computer-number').classList.add('visible');

        // data la variabile userMessagge impostata su pareggio
        // se il numero utente è maggiore del numero del computer avrà vinto
        // se no avrà perso
        // e stampo il messaggio nel DOM

        let userMessage = 'HAI PAREGGIATO';

        if (userNumber > computerNumber) {
            userMessage = 'HAI VINTO';
        } else if (userNumber < computerNumber) {
            userMessage = 'HAI PERSO';
        }
        console.log(userMessage);

        // stampo

        document.getElementById('user-message').innerHTML = userMessage;
    }
);


