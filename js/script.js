/*********** CONST ***************/
const container = document.querySelector(".container");
const numCells = document.getElementById("grid-dim");
const btnStart = document.querySelector("button");
const bombArray = [];
const numIter = 16;
/*********** LET ***************/
let className;



reset();


btnStart.addEventListener('click', function(){
  reset();
  createBomb(parseInt(numCells.value));
  console.log("array bombe", bombArray);
  className = selectValue(numCells.value);
  letsPlay(className);
});






/*********** FUNCTIONS ***************/
function reset(){
  container.innerHTML = "";
}


function selectValue(numCellsF){
  let classNameF;

  switch (numCellsF){
    case "100":
      classNameF = "dieci";
      break;
    case "81":
      
      classNameF = "nove";
      break;
    case "49":
      classNameF = "sette";
      break;
    
    default:
      alert("Seleziona un valore valido");
      classNameF = null;
  }
  
  return classNameF;
}


function letsPlay(flag) {
  
  const max = parseInt(numCells.value);
  if(flag != null){
    for (let i = 0; i< max; i++ ){

      const square = document.createElement("div");

      square.classList.add("square", className);
      square.addEventListener('click', handleBtnClick);
      container.append(square);
      square._ID = i;
      // console.log(square);
      // square.innerHTML = square._ID;
    }
  }
}

function createBomb (max){

  

  for (let i = 0; i < numIter; i++){
    // console.log(i,"iterazione");
    let found ;
    do{

      const newBomb = randomizer(0,max);
      // console.log("numero estratto: ", newBomb);

      if(!(bombArray.includes(newBomb))){
        // console.log("NON trovato");
        bombArray.push(newBomb);
        found = false;
      }else{
        // console.log("trovato");
        found = true;
      }
    }while(found)
  }
}

function randomizer(min , max){
  return Math.ceil(Math.random() * (max - min) + min);
}

function handleBtnClick(){
  this.classList.toggle("clicked");
  
}