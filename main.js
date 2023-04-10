//setup variables

let result = document.getElementById('resultValue');
let submitButton = document.getElementById('submitButton');
let resetButton = document.getElementById('resetButton');
let counter = 0;
let testData = "";
let inputString =[];
let vowels = ["a", "e", "i", "o", "u"];
let submitState = 0;
result.innerHTML = counter;

//setup event listeners
submitButton.addEventListener("click",vowelCounter);
resetButton.addEventListener("click", reset);

//setup callback functions
function vowelCounter () {
    let userInput = document.getElementById('userText').value;
    if(userInput != "" && submitState == 0){
        inputString = userInput.split("");
        
        for(let i = 0; i < inputString.length; i++){
            
            for(let j = 0; j < vowels.length; j++){
                if(inputString[i] === vowels[j]){
                    
                    counter++;
                    
         }
        }
       }
      }else {
        alert("Please reset textfield before trying again.");
      }
      result.innerHTML = counter;
      submitButton.addEventListener("click",vowelCounter);
      submitState = 1;
     } ;

     function reset () {
        document.getElementById('userText').value = '';
        submitButton.addEventListener("click",vowelCounter);
        submitState = 0;
        result.innerHTML = 0;
        counter=0;
     }