console.log('hello');
let user_score=0;
let machine_score=0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result=document.getElementById("result");
const choices=document.getElementById("choices");
const score=document.getElementById("score");
function startGame(userChoice)
{
    choice_arr=new Array();
    choice_arr.push("rock");
    choice_arr.push("paper");
    choice_arr.push("scissors");
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log("User choice "+ userChoice);
    console.log("Machine Choice " + choice_arr[randomNumber-1]);
    whowins="User";
    machineChoice=choice_arr[randomNumber-1];
    choices.innerHTML="You Selected: "+userChoice+" <br> Machine Selected: "+machineChoice;


    if(userChoice=="rock"){
        if(machineChoice=="paper"){
            whowins="Machine";
        }
        else if(machineChoice=="scissors")
        {
            whowins="User";
        }
        else{
            whowins="Draw";
        }
        
    }
    else if(userChoice=="paper"){
        if(machineChoice=="paper"){
            whowins="Draw";
        }
        else if(machineChoice=="scissors")
        {
            whowins="Machine";
        }
        else{
            whowins="User";
        }

    }
    else if(userChoice=="scissors"){
        if(machineChoice=="paper"){
            whowins="User";
        }
        else if(machineChoice=="scissors")
        {
            whowins="Draw";
        }
        else{
            whowins="Machine";
        }
    }
    if(whowins=="User")
    {
        user_score+=1;
    }
    else if(whowins=="Machine")
    {
        machine_score+=1;
    }
    score.innerHTML=user_score+":"+machine_score;
    console.log(whowins);
    console.log(user_score);
    console.log(machine_score);
    if(whowins=="Draw"){
        result.innerHTML="Its a "+whowins; 
    }
    else
    result.innerHTML=whowins+" Won ";
    
}

rock.addEventListener("click",function() {

    startGame("rock");

})

paper.addEventListener("click",function() {
    startGame("paper");
})

scissors.addEventListener("click",function() {
    
    startGame("scissors");
})   
                                                                                                                                                                             