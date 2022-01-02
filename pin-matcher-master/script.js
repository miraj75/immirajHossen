// use common function 

// empty value

function emptyValue(id){
    document.getElementById(id).value = ' '
}

//empty Text

function emptyText(id){
    document.getElementById(id).innerText = ' '
}

// display none

function displayNone(id){
    document.getElementById(id).style.display ='none';
}

// display block
function displayBlock(id){
    document.getElementById(id).style.display = 'block';
}

// generate random number

function randomNumFun(){
    var randomNum = Math.floor(1000 + Math.random() *9000);
    document.getElementById('generateNum').value = randomNum;

    emptyValue('inputPin');
    displayNone('matched');
    displayNone('unMatched');
}

// input number value 

function btnKey(id){
    let preValue = document.getElementById('inputPin').value;
    let key = document.getElementById(id).innerText ;
    document.getElementById('inputPin').value = preValue + key ;
}

// clean part 

function clean(){
    document.getElementById('inputPin').value = ' ';
}

// Backspace 

function cleanLast(){
    var inputResult = document.getElementById('inputPin').value;
    var removeValue = inputResult.slice(0, inputResult.length -1);
    document.getElementById('inputPin').value =removeValue;
}

// match or didn't match

function submitBtn(){
    var randomNum = document.getElementById('generateNum').value;
    var inputType = document.getElementById('inputPin').value;

    if (randomNum == inputType){
        displayBlock('matched');
        displayNone('unMatched');
        
    }else{
        displayBlock('unMatched');
        displayNone('matched');
    }
}