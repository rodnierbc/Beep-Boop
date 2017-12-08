
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

//this function returns true for all integer numbers greater than or equal to zero
function isValidNumber(number){
    var regExp = /^([0-9])*$/;
    return regExp.test(number);
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
