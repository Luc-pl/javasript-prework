

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    else if(argMoveId == 2){
        return 'papier';
    }
    else(argMoveId == 3){
        return 'nożyce';
    } else(argMoveId == ''){
        return 'Wybierz prawidłowy ruch';
    }
    
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}
    


/*
function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Tym razem przegrywasz :(');
  }
}
*/

// Odczytywanie ruchu komputera

let randomFraction = Math.random();

printMessage('Wylosowany ułamek to: ' + randomFraction);

let calculation = randomFraction * 3 + 1;

printMessage('Ułamek pomnożony przez 3 i powiększony o 1: ' + calculation);

let roundNumber = Math.floor(calculation);

printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

function getMoveName(randomNumber){
    if(randomNumber == 1){
        return 'kamień';
    } 
    else if(randomNumber == 2){
        return 'papier';
    }
    else if(randomNumber == 3){
        return 'nożyce'
    }
}
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
*/
printMessage('Mój ruch to: ' + computerMove);

//Odpowiedź gracza

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

function getMoveName(randomNumber){
    if(randomNumber == 1){
        return 'kamień';
    } 
    else if(randomNumber == 2){
        return 'papier';
    }
    else if(randomNumber == 3){
        return 'nożyce'
    }
}
/*
if(playerInput == '1'){
  playerMove = 'kamień';
}

else if(playerInput == '2'){
    playerMove = 'papier';
}

else if(playerInput == '3'){
    playerMove = 'nożyce'
}
*/
printMessage('Twój ruch to: ' + playerMove);

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