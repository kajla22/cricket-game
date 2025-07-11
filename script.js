function generateComputerChoice(){
    let randomNumber= Math.random()*3;
    if(randomNumber>0 && randomNumber<=1){
        return 'Bat';
    }
    else if(randomNumber>1 && randomNumber<=2){
        return 'Ball';
    }
    else{
        return 'Stump';
    }
}

function getResult(userMove,computerMove){
    if(userMove === 'Bat'){
        if(userMove === computerMove){
            return 'It\'s a Tie!';
        }
        else if(computerMove === 'Ball'){
            return 'You Win!';
        }
        else{
            return 'You Lose!';
        }
    }

    else if(userMove === 'Ball'){
         if(userMove === computerMove){
            return 'It\'s a Tie!';
        }
        else if(computerMove === 'Stump'){
            return 'You Win!';
        }
        else{
            return 'You Lose!';
        }
    }

    else{
        if(userMove === computerMove){
            return 'It\'s a Tie!';
        }
        else if(computerMove === 'Bat'){
            return 'You Win!';
        }
        else{
            return 'You Lose!';
        }
    }
}

function showResult(userMove,computerMove,result){
    alert(`You chose: ${userMove}\nComputer chose: ${computerMove}\nResult: ${result}`);
}