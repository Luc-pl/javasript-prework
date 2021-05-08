function getMoveName(argMoveId){
    console.log('Wywołano funkcję getMoveName z argumentem argMoveId: ' + argMoveId);
    if(argMoveId == 1){
      return 'kamień';
    }
    else if(argMoveId == 2){
        return 'papier';
    }
    else if(argMoveId == 3){
        return 'nożyce';
    }
    else {
    printMessage('Nieprawidłowy ruch ' + argMoveId + '.');
        return 'WYBIERZ LICZBĘ PORZĄDKOWĄ 1-3';
  }
}

function displayResult(argComputerMove, argPlayerMove){
    console.log('wykonano ruchy. Komputer:', argComputerMove, '. Gracz:', argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
    if((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
      printMessage('Ty wygrywasz!');
    } 
    else if(argComputerMove == argPlayerMove) {
      printMessage('Remis');  
    }
    else {
      printMessage('Tym razem przegrywasz :(');
    }
  }

// Odczytywanie ruchu komputera

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
  computerMove = 'kamień';
}

else if(randomNumber == 2){
  computerMove = 'papier';
}

else if(randomNumber == 3){
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);
*/

//Odpowiedź gracza

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

displayResult(computerMove, playerMove);


/*
if(playerInput == '1'){
  playerMove = 'kamień';
}

else if(playerInput == '2'){
    playerMove = 'papier';
}

else if(playerInput == '3'){
    playerMove = 'nożyce';
}


printMessage('Twój ruch to: ' + playerMove);
*/

/*
// Wynik gry

if( computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz')
}

else if( computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrywasz')
}

else if( computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz')
}

if( computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('Przegrywasz')
}

else if( computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('Przegrywasz')
}

else if( computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage('Przegrywasz')
}

// Remis

if( computerMove == 'papier' && playerMove == 'papier') {
    printMessage('Remis')
}

else if( computerMove == 'nożyce' && playerMove == 'nożyce') {
    printMessage('Remis')
}

else if( computerMove == 'kamień' && playerMove == 'kamień') {
    printMessage('Remis')
}

// Nieznany ruch

if( computerMove == 'papier' && playerMove == 'nieznany ruch') {
    printMessage('Wybierz poprawny numer ruchu')
}

else if( computerMove == 'nożyce' && playerMove == 'nieznany ruch') {
    printMessage('Wybierz poprawny numer ruchu')
}

else if( computerMove == 'kamień' && playerMove == 'nieznany ruch') {
    printMessage('Wybierz poprawny numer ruchu')
}
*/
