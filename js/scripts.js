//Definition of the constants of my program
const BOOP = 'Boop!';
const BEEP = 'Beep!';
const SORRY_MESSAGE = "I'm sorry, ";
const IMPOSSIBLE_MESSAGE = " I'm afraid I can't do that.";
const NUMBER_ONE = "1";
const NUMBER_ZERO = "0";
const NUMBER_THREE = "3";

//Definition of global variables
var userName = "Rodnier";
var user = [];

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
  number = number.toString();
  char = char.toString();
  if(number.indexOf(char) !== -1){
    return true;
  }
  else {
    return false;
  }
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
    if(containsChar(numbers[i], NUMBER_ZERO)){
      numbers[i] = BEEP;
    }
    else if (containsChar(numbers[i], NUMBER_ONE)) {
      numbers[i] = BOOP;
    }
    else if (isDivisible(numbers[i], NUMBER_THREE)) {
      numbers[i] = SORRY_MESSAGE+user['name']+IMPOSSIBLE_MESSAGE;
    }
  }
  return numbers;
}
function beepBoop(number){
  var numbers =[];
  number = deleteNegativeSymbol(number);
  number = removeZeros(number);
  if(isValidNumber(number)){
    numbers = replace(rangeNumbers(number));
  }
  return numbers;
}
function register(name, lastName, email){
  user['name'] = name;
  user['lastName'] = lastName;
  user['email'] = email;
  return true;
}
function done(){
  location.reload(true);
}

$(function(){
  $('#numberForm').submit(function(event){
    event.preventDefault();
    $('#beepBoopList').empty();
    var number = $('#enterNumber').val();
    var wayToShow = $("input:radio[name=wayToShow]:checked").val();
    if(wayToShow === '0'){
      beepBoop(number).forEach(function(listItem) {
        $('#paragraph').hide();
        $('#list').show();
      $('#beepBoopList').append('<li class="list-group-item">' + listItem + '</li>');
    });
    }
    else if (wayToShow === '1') {
      $('#list').hide();
      $('#paragraph').show();
      $('#beepBoop').text(beepBoop(number));
    }
  });
  $('#registerForm').submit(function(event){
    event.preventDefault();
    if(!register($('#name').val(), $('#lastName').val(), $('#email').val())){
      alert("try again");
    }
    $('#registerContent').toggle();
    $('#beepBoopPlay').toggle();
    $('#greetingsTitle').text("Hello "+user['name']+" "+user['lastName']+ ", you are redy to start!!!");
  });
  $('#done').click(function(){
    done();
  });
})
