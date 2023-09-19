/*********** CONST ***************/
const container = document.querySelector(".container");
const numCells = document.getElementById("grid-dim");
const btnStart = document.querySelector("button");
/*********** LET ***************/
let className;


reset();


btnStart.addEventListener('click', function(){
  reset();
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

function handleBtnClick(){
  this.classList.toggle("clicked");
  this.innerHTML = this._ID;
}