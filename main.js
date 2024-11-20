//display in calculator screen
function displayContent(content){
    result.value +=  content
}
//Clear data
function ClearCalcScreen(){
    result.value =""
}
// backspace
function removeCalc(){
    result.value = result.value.slice(0, -1)
}
//Evaluation

function calcout(){
    result.value = eval(result.value) //eval is a predefined function for calculations
}