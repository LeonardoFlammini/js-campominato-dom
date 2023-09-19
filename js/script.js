/*********** CONST ***************/
const container = document.querySelector(".container");
const numCells = document.getElementById("grid-dim");
const btnStart = document.querySelector("button");
const outPut = document.getElementById("output-msg");
const bombArray = [];
const numIter = 16;
/*********** LET ***************/
let message;
let className;
let pointsCounter = 0;
let cellsArray;


reset();

//TODO:verificare se il reset impalla il browser. Il problema era che schiacciando play con valore 0 dopo fine gioco impallava tutto 
btnStart.addEventListener('click', function(){
  reset();
  className = selectValue(numCells.value);
  createBomb(parseInt(numCells.value));
  console.log("array bombe", bombArray);
  letsPlay(className);
});


cellsArray = document.getElementsByClassName("square");

console.log(pointsCounter);

/*********** FUNCTIONS ***************/
function reset(){
  container.innerHTML = "";
  bombArray.splice(0,bombArray.length);
  outPut.innerHTML = '';
  pointsCounter = 0;
}

/*************************************/

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

/*************************************/

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

/*************************************/

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

/*************************************/

function randomizer(min , max){
  return Math.ceil(Math.random() * (max - min) + min);
}

/*************************************/

function handleBtnClick(){
  if(bombArray.includes(this._ID)){
    endGame(pointsCounter);
  }else{
    this.classList.add("clicked");
    pointsCounter++;
    this.removeEventListener('click', handleBtnClick);
    console.log(pointsCounter);
  }

  // return pointsCounter;
}

function endGame (pointsCounter){

  for(let i = 0; i < parseInt(numCells.value); i++){
    if ( bombArray.includes(cellsArray[i]._ID)){
      cellsArray[i].classList.add("bomb");
    } 
  }

  const tend = document.createElement('div');
  tend.className = "tend";
  // tend.classList.remove("d-none");
  container.append(tend);
  outPut.innerHTML = `HAI PERSO: il tuo punteggio è ${pointsCounter}`
}