let userScore=0;
let compScore=0;
let user=document.querySelector("#user-score");
let comp=document.querySelector("#comp-score")

let msg=document.querySelector("#msg");

let choice=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx =Math.floor(Math.random()*3);

    return options[randIdx];
}

let playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);

    let compChoice= genCompChoice();

    console.log("comp choice = ",compChoice);
    if(compChoice==="rock" && userChoice==="scissors")
    {
        console.log(" comp win ");
        compScore++;
        comp.innerText=compScore;
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }
    else if( compChoice==="scissors" && userChoice==="rock")
    {
        console.log(" user win ");
        userScore++;
        user.innerText=userScore;
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
    }
    else if(compChoice==="scissors" && userChoice==="paper")
    {
        console.log(" comp win ");
        compScore++;
        comp.innerText=compScore;
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }
    else if(compChoice==="paper" && userChoice==="scissors")
    {
        console.log(" user win ");
        userScore++;
        user.innerText=userScore;
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
        
    }
    else if(compChoice==="paper" && userChoice==="rock")
    {
        console.log(" comp win ");
        compScore++;
        comp.innerText=compScore;   
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }
    else if(compChoice==="rock" && userChoice==="paper")
    {
        console.log(" user win ");
        userScore++;
        user.innerText=userScore;
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
    }
    else
    {
        console.log("Draw");
        msg.innerText="The Game is Draw";
        msg.style.backgroundColor="Black";
    }

}

choice.forEach((choice)=>{

    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
})