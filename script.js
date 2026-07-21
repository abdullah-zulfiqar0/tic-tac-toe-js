
let boxes =  document.querySelectorAll(".box");
let resetBtn =  document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer =  document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 0;

const winPatterns =[

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
//R-2
const resetGame=()=>{

turnO=true;
enableBoxes();
msgContainer.classList.add("hide");
count = 0;

}

// STEP 1

boxes.forEach((box)=>{


box.addEventListener("click",()=>{

    console.log("Box was Clicked ");
   if (turnO){
    box.style.color ="yellow";
    box.innerText = "O";
    turnO=false;
   }
   else{
    box.innerText = "X";
    turnO=true;
   }
   box.disabled=true;
   count ++;
   checkWinner();
});
});

//STEP 4
const disableBoxes = ()=>{

    for (let box of boxes){
        box.disabled = true;
    }
};
//R-3
const enableBoxes = ()=>{

    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}; 


// STEP3
const  showWinner =(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");//
    disableBoxes();

};

// STEP2
const checkWinner =()=>{


for (let pattern of winPatterns){


    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val !="" && pos3Val !=""){

         if ( pos1Val === pos2Val && pos2Val === pos3Val){
               showWinner(pos1Val);
               return ;
         }
      


    }
 
}


if ( count ===9){

     msg.innerText = "Match Draw!";
      msgContainer.classList.remove("hide");
}

};


newGameBtn.addEventListener("click",resetGame); //R-1
resetBtn.addEventListener("click",resetGame);