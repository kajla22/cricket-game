function playGame(userMove){
    let computerMove=generateComputerChoice();
    let resultMsg=getResult(userMove, computerMove);
    showResult(userMove, computerMove, resultMsg);
}







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

let scoreStr=localStorage.getItem('score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr){
 score= scoreStr ? JSON.parse(scoreStr) : {
    win: 0,
    lose: 0,
    tie: 0,
 };
    score.displayScore= function(){
        return `total no of matches:${score.win+score.lose+score.tie}\nWins: ${score.win}\nLosses: ${score.lose}\nTies: ${score.tie}`;
    }

    showResult();

};


function getResult(userMove,computerMove){
    if(userMove === 'Bat'){
        if(userMove === computerMove){
            score.tie++;
            return 'It\'s a Tie!';
        }
        else if(computerMove === 'Ball'){
            score.win++;
            return 'You Win!';
        }
        else{
            score.lose++;
            return 'You Lose!';
        }
    }

    else if(userMove === 'Ball'){
         if(userMove === computerMove){
            score.tie++;
            return 'It\'s a Tie!';
        }
        else if(computerMove === 'Stump'){
            score.win++;
            return 'You Win!';
        }
        else{
            score.lose++;
            return 'You Lose!';
        }
    }

    else{
        if(userMove === computerMove){
            score.tie++;
            return 'It\'s a Tie!';
        }
        else if(computerMove === 'Bat'){
            score.win++;
            return 'You Win!';
        }
        else{
            score.lose++;
            return 'You Lose!';
        }
    }
}

function showResult(userMove,computerMove,result){

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('#user-move').innerText=userMove ? `You have choosen: ${userMove}` : '';

    document.querySelector('#computer-move').innerText=computerMove ? `Computer has choosen: ${computerMove}` : '';

    document.querySelector('#result').innerText=result || '';

    document.querySelector('#score').innerText=score.displayScore();

    // alert(`You chose: ${userMove}\nComputer chose: ${computerMove}\nResult: ${result}\n ${score.displayScore()}`);
}