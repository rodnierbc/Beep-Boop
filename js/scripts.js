//Definition of the constants of my program
const BOOP = 'Boop!';
const BEEP = 'Beep!';
const SORRY_MESSAGE = "I'm sorry,";
const IMPOSSIBLE_MESSAGE = "I'm afraid I can't do that.";

//This function eliminates the first occurrence of the symbol - in a string
function deleteNegativeSymbol(number){
  if(number[0]==='-'){
    return number.substring(1);
  }
  else {
    return number;
  }
}
//This function eliminates the zeros contained in a string that starts with zero until you find a different character
function removeZeros(number){
  if (number.length > 0) {
    var counter =0;
    while(number[counter]==="0"){
      counter ++;
    }
    if(number.length===counter){
      return '0';
    }
    else {
      return number.substring(counter);
    }
  }
}
//This function returns true for all integer numbers greater than or equal to zero
function isValidNumber(number){
    var regExp = /^([0-9])*$/;
    return regExp.test(number);
}
//This function returns a call to the includes () function to know if a substring is contained in another string.
function containsChar(number, char){
  return number.includes(char);
}
function isDivisible(num1, num2){
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  return num1%num2 === 0;
}
function rangeNumbers(number){
  number = parseInt(number);
  numbers = [];
  for(i=0; i<=number; i++){
    numbers.push(i);
  }
  return numbers;
}
function replace(numbers){
  for(i=0; i<numbers.length; i++){
    if(numbers[i])
  }
}








$(function(){
  $('#numberForm').submit(function(event){
    event.preventDefault();
    var number = $('#enterNumber').val();
    var number = deleteNegativeSymbol(number);
    var number = removeZeros(number);
    alert(isValidNumber(number));
    alert(number);
  });
})
