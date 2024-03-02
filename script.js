const display = document.getElementById('display')

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    display.value = eval(display.value);
}

function backKey(){
// Get the current value of the display
let currentValue = display.value;
    
// Remove the last character from the display value
currentValue = currentValue.slice(0, -1);

// Update the display with the new value
display.value = currentValue;
}