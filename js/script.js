{function playGame(playerInput) {
    console.log('Wywołano funkcję playGame z argumentem playerInput')

    clearMessages()
    console.log('Wywołano funkcję clearMessages');

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

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
        printMessage('X');
        } 
        else if(argComputerMove == argPlayerMove) {
        printMessage('Remis');  
        }
        else {
        printMessage('Tym razem przegrywasz :(');
        printMessage('Y');
        }
    }

    const computerMove = getMoveName(randomNumber);
    /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);   
}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
  });

document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
  });

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
  });
}