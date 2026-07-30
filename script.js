let choices=["rock","paper","scissor"];
let userChoice=choices[0];
let computerChoice=choices[0];

let userSelection=document.querySelector(".labelbar #userSelection");

let computerSelection=document.querySelector(".labelbar #computerSelection");

let result=document.querySelector(".labelbar #result");

let colorChange=document.querySelector(".labelbar");
colorChange.style.backgroundColor="rgb(3, 41, 255)";



let rock=document.querySelector("#rock");
rock.addEventListener("click",()=>{
    
    computerChoice=choices[Math.floor(Math.random()*3)];
    userChoice=choices[0];
    userSelection.innerText="You Select = "+userChoice;
    computerSelection.innerText="Computer Select = "+computerChoice;
    if(computerChoice==="rock"){
        result.innerText="Draw";
        colorChange.style.backgroundColor="rgb(3, 41, 255)";
        
    }
    else if( computerChoice==="paper"){
        result.innerText="You Loose";
        colorChange.style.backgroundColor="red";
    }
    else if( computerChoice==="scissor"){
        result.innerText="You Win";
        colorChange.style.backgroundColor="rgb(91, 161, 0)";
    }
});

let paper=document.querySelector("#paper");
paper.addEventListener("click",()=>{
    computerChoice=choices[Math.floor(Math.random()*3)];
    userChoice=choices[1];
    userSelection.innerText="You Select = "+userChoice;
    computerSelection.innerText="Computer Select = "+computerChoice;
    if(computerChoice==="paper"){
        result.innerText="Draw";
        colorChange.style.backgroundColor="rgb(3, 41, 255)";
    }
    else if( computerChoice==="rock"){
        result.innerText="You Win";
        colorChange.style.backgroundColor="rgb(91, 161, 0)";
    }
    else if( computerChoice==="scissor"){
        result.innerText="You Lose";
         colorChange.style.backgroundColor="red";
    }
});

let scissor=document.querySelector("#scissor");
scissor.addEventListener("click",()=>{
   computerChoice=choices[Math.floor(Math.random()*3)];
    userChoice=choices[2];
    userSelection.innerText="You Select = "+userChoice;
    computerSelection.innerText="Computer Select = "+computerChoice;
    if(computerChoice==="scissor"){
        result.innerText="Draw";
        colorChange.style.backgroundColor="rgb(3, 41, 255)";

    }
    else if( computerChoice==="paper"){
        result.innerText="You Win";
         colorChange.style.backgroundColor="rgb(91, 161, 0)"
    }
    else if( computerChoice==="rock"){
        result.innerText="You Lose";
         colorChange.style.backgroundColor="red"
    }
});



