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

        // stampare il numero
        document.getElementById('your-number').innerHTML = userNumber;
    }
);