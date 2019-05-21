let result;
let score;
let Uscore = 0;
let CPUscore = 0;
function computerPlay(min, max) {
    let rndnumber = Math.floor(Math.random() * (max - min + 1) + min);

    if (rndnumber == 1) {
        return result = "ROCK";
    } else if (rndnumber == 2) {
        return result = "PAPER";
    } else {
        return result = "SCISSORS"
    }
}
function UserChoose(upperchoice) {
    computerPlay(1, 3);
    if (upperchoice == "ROCK" && result == "SCISSORS") {
        return ("You win! Rock beats Scissors!", score = "UWin")
    } else if (upperchoice == "ROCK" && result == "ROCK") {
        return (score = "Tie")
    } else if (upperchoice == "ROCK" && result == "PAPER") {
        return ("You lose! Paper beats rock!", score = "Ulose")
    } else if (upperchoice == "PAPER" && result == "SCISSORS") {
        return ("You lose! Scissors beats paper!", score = "Ulose")
    } else if (upperchoice == "PAPER" && result == "PAPER") {
        return (score = "Tie")
    } else if (upperchoice == "PAPER" && result == "ROCK") {
        return ("You win! Paper beats rock!", score = "UWin")
    } else if (upperchoice == "SCISSORS" && result == "ROCK") {
        return ("You lose! Rock beats scissors!", score = "Ulose")
    } else if (upperchoice == "SCISSORS" && result == "PAPER") {
        return ("You win! Scissors beats paper!", score = "UWin")
    } else if (upperchoice == "SCISSORS" && result == "SCISSORS") {
        return ("Tie! Run it again to decide who wins!", score = "Tie")
    }
}
let buttonAdded;
const div = document.querySelector("#div");
const partialWin = document.createElement('p');
const tie= document.createElement('p');
const finalScore= document.createElement('p');
partialWin.textContent = (" User score = " + Uscore + " - CPU Score = " + CPUscore);
div.appendChild(partialWin);
div.appendChild(tie);
div.appendChild(finalScore);
finalScore.hidden=true;
partialWin.hidden=true;
tie.hidden=true;
let rck = document.querySelector('#ROCK');


rck.addEventListener('click',() => {
    if(Uscore<5 && CPUscore<5){
        UserChoose("ROCK");
        tie.hidden=true;
        game()
        partialWin.hidden =false; 
        buttonAdded=true;
    }
    if(buttonAdded && (Uscore==5 || CPUscore==5)){
        buttonAdded=false;
        const playagain = document.createElement('input');
        playagain.setAttribute('id','play');
        playagain.setAttribute('type', 'button');
        playagain.setAttribute('value', 'Play again!');
        playagain.classList.add('play');
        div.appendChild(playagain); 
        let plagain = document.querySelector('#play');
        plagain.addEventListener('click', () => {
            Uscore=0;
            CPUscore=0;
            partialWin.hidden=true;
            finalScore.hidden=true;
            playagain.remove();
        })
    }
})
let papr = document.querySelector("#PAPER");
papr.addEventListener('click', () => {
    if(Uscore<5 && CPUscore<5){
        UserChoose("PAPER");
        tie.hidden=true;
        game()
        partialWin.hidden =false;
        buttonAdded=true;
    }
    if(buttonAdded && (Uscore==5 || CPUscore==5)){
        buttonAdded=false;
        const playagain = document.createElement('input');
        playagain.setAttribute('id','play');
        playagain.setAttribute('type', 'button');
        playagain.setAttribute('value', 'Play again!');
        playagain.classList.add('play');
        div.appendChild(playagain); 
        let plagain = document.querySelector('#play');
        plagain.addEventListener('click', () => {
            Uscore=0;
            CPUscore=0;
            partialWin.hidden=true;
            finalScore.hidden=true;
            playagain.remove();
        })
    }
})

let sciss = document.querySelector("#SCISSORS");
sciss.addEventListener('click', () => {
    if(Uscore<5 && CPUscore<5){
        UserChoose("SCISSORS");
        tie.hidden=true;
        game();
        partialWin.hidden =false; 
        buttonAdded=true;
    }
    if(buttonAdded && (Uscore==5 || CPUscore==5)){
        buttonAdded=false;
        const playagain = document.createElement('input');
        playagain.setAttribute('id','play');
        playagain.setAttribute('type', 'button');
        playagain.setAttribute('value', 'Play again!');
        playagain.classList.add('play');
        div.appendChild(playagain); 
        let plagain = document.querySelector('#play');
        plagain.addEventListener('click', () => {
            Uscore=0;
            CPUscore=0;
            partialWin.hidden=true;
            finalScore.hidden=true;
            playagain.remove();
        })
    }
})
function game() {
    let i=0;
        if(score=="UWin"){
            Uscore++;
            partialWin.textContent = (" User score = " + Uscore + " - CPU Score = " + CPUscore);
        }else if(score=="Ulose"){
            CPUscore++;
            partialWin.textContent = (" User score = " + Uscore + " - CPU Score = " + CPUscore);
        }else{
            tie.classList.add('tie');
            tie.hidden= false;  
            tie.textContent = ("You tied! Try again!");
            }
        if(Uscore==5 || CPUscore==5 ){
            if(Uscore>CPUscore){
                partialWin.textContent="FINAL SCORE: USER = "+Uscore + " - CPU = "+ CPUscore;
                finalScore.hidden=false;
                finalScore.textContent= "YOU WON! What a lucker."
            }else{
                partialWin.textContent="FINAL SCORE: USER = "+Uscore + " - CPU = "+ CPUscore;
                finalScore.hidden=false;
                finalScore.textContent=("YOU SUCK! Play again!");
            }
        }
} 