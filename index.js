function Rock(){

    const computer = Math.random();
    let computerMove = '';

    if (computer >= 0 && computer < 1/3 ){
        computerMove = 'Rock';
    } else if (computer >= 1/3 && computer < 2/3) {
        computerMove = 'Paper';
    } else if (computer >= 2/3 && computer < 1){
        computerMove = 'Scissors';
    }

    let result = '';

    if (computerMove === 'Rock'){
        result = 'It\'s a tie';
    } else if (computerMove === 'Paper'){
        result = 'You lose';
    } else if (computerMove === 'Scissors') {
        result = 'You win';
    }
      
    alert(`You picked Rock. \nComputer picked ${computerMove}. \n${result}`);
}

function Paper(){

    const computer = Math.random();
    let computerMove = '';

    if (computer >= 0 && computer < 1/3 ){
        computerMove = 'Rock';
    } else if (computer >= 1/3 && computer < 2/3) {
        computerMove = 'Paper';
    } else if (computer >= 2/3 && computer < 1){
        computerMove = 'Scissors';
    }

    let result = '';

    if (computerMove === 'Rock'){
        result = 'You win';
    } else if (computerMove === 'Paper'){
        result = 'It\'s a tie';
    } else if (computerMove === 'Scissors') {
        result = 'You lose';
    }
      
    alert(`You picked Paper. \nComputer picked ${computerMove}. \n${result}`);
}

function Scissors(){

    const computer = Math.random();
    let computerMove = '';

    if (computer >= 0 && computer < 1/3 ){
        computerMove = 'Rock';
    } else if (computer >= 1/3 && computer < 2/3) {
        computerMove = 'Paper';
    } else if (computer >= 2/3 && computer < 1){
        computerMove = 'Scissors';
    }

    let result = '';

    if (computerMove === 'Rock'){
        result = 'You lose';
    } else if (computerMove === 'Paper'){
        result = 'You win';
    } else if (computerMove === 'Scissors') {
        result = 'It\s a tie';
    }
      
    alert(`You picked Scissors. \nComputer picked ${computerMove}. \n${result}`);
}