let boxes = document.querySelectorAll(".btn");
const options=['Rock','Paper','Scissor'];
let compChoice = options[Math.floor(Math.random() * 3)];
let result="";
let a=5;
let b=0;
let c=0;
function decideWin(choosen){
    if(choosen===compChoice)
        {
            result='Its a tie';
            
        }
    else if( (choosen=='Rock') && (compChoice=='Scissor') ||
              (choosen=='Paper') && (compChoice=='Rock') ||
              (choosen=='Scissor') && (compChoice=='Paper')
           )
        {
            result='You have Won';
            a=1;
            b++;
            
        }
        else
        {
            result='You Lost';
            a=0;
            c++;
        }
        document.querySelector(".mm").innerText=`Hello , ${result} \n You have choosen ${choosen} \n Computer has choosen ${compChoice}`;
        // console.log(result);
        reset(result);
        {
            if(a==1){
            document.querySelector("#y").innerText=`${b}`;
        }
        else if(a==0)
        document.querySelector("#c").innerText=`${c}`;
    }
    // function yahoo(){

    //       a=5;
    //       reset="";

    // }
    }
    
    function newGame(){
        for (let box of boxes) {
            box.disabled = false;
          }
          document.querySelector(".mm").innerText=``;
          compChoice = options[Math.floor(Math.random() * 3)];

    }
   
   
    function reset(result){
    if(result!=""){
        for (let box of boxes) {
          box.disabled = true;
        }
    }
    }
