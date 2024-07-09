let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg") //# used for id ,"." used for class






// let select variable first we decide whose turn first "x" or "o"


let turnO = true; //playerx,or playero track turn of player if trye than player o otherwise playerx

const winpatterns = [ //aray of array or 2d array usually access matrixes
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];






const showwinner = (winner) =>{
msg.innerHTML = `Congratulations, Winner is ${winner}`;
msgcontainer.classList.remove("hide");
disableboxes();

}

const checkwinner =() =>{ //checkpattern 
      for(let pattern of winpatterns){
       
              let pos1val = boxes[pattern[0]].innerHTML;
              let pos2val = boxes[pattern[1]].innerHTML;
              let pos3val = boxes[pattern[2]].innerHTML;

              if(pos1val!== "" && pos2val!== "" && pos3val!== "") {
                if(pos1val===pos2val && pos2val===pos3val){
                    
                    showwinner(pos1val); // call or pass value and winner is value of position1
                }
              }
      }

}


boxes.forEach((box) => { //(box)= node= mainitem
    box.addEventListener("click" ,() =>{
      
        if (turnO) { //player o
            box.innerHTML = "O";
            box.style.color = "green";
            turnO = false;
        } else{ //player x
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled =true;

         checkwinner();
    });
});

const resetgame = () =>{
    turnO = true;
    enableboxes(); // call or pass value
    msgcontainer.classList.add("hide");
}





const disableboxes = () =>{
    for(let box of boxes){
       box.disabled = true; 
    }
}


const enableboxes = () =>{
    for(let box of boxes){
       box.disabled = false; 
       box.innerHTML = "";
    }
}






newgamebtn.addEventListener("click" , resetgame);
resetbtn.addEventListener("click" , resetgame);

