let userScore=0;
let compScore=0;
let options=["rock", "paper","scissors"];
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userpara=document.querySelector("#userpara");
let comppara=document.querySelector("#comppara");
let reset=document.querySelector("#resetgame");
reset.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    msg.innerText="Play Your Move";
    msg.style.backgroundColor="#03045e";
    userpara.innerText=0;
    comppara.innerText=0;
});
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame=()=>{
    msg.innerText="The game is Draw, Play Again!"
    msg.style.backgroundColor="#03045e";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText=`You won!, your ${userChoice} beat ${compChoice}`;
        userScore++;
        userpara.innerText=userScore;
        msg.style.backgroundColor="green";
    }
    else{
        msg.innerText=`You Lost. ${compChoice} beat your ${userChoice}`;
        compScore++;
        comppara.innerText=compScore;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    let userWin=true;
    const compChoice=genCompChoice();
    if(userChoice==compChoice){
        drawGame();
    }
    else{
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        
    });
});