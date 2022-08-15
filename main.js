let output = document.getElementById('opt');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let divide = document.querySelector('.divide');
let mulitiply = document.querySelector('.multiply');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let clear = document.querySelector('.clear');
let point = document.querySelector('#dot');
let container = document.querySelector('.container');
let equal = document.querySelector('#equal');

let answer = 0;
let sign;


one.addEventListener('click', ()=> {
    if (output.innerText == '0') {
        output.innerText = '1';
    }
    else {
        output.innerText = '1';
    }

    if (answer == 0) {
        answer = 1;
    }


    if (sign == '+') {
        answer += 1;
    }
    else if (sign == '-') {
        answer -= 1;;
    }
    else if (sign == '÷') {
        answer /= 1;
    }
    else if (sign == '×') {
        answer *= 1;
    }

})

two.addEventListener('click', ()=> {
    if (output.innerText == '0') {
        output.innerText = '2';
        
    }
    else {
        output.innerText = '2';
    }

    if (answer == 0) {
        answer = 2;
    }

    if (sign == '+') {
        answer += 2;
    }
    else if (sign == '-') {
        answer -= 2;
    }
    else if (sign == '÷') {
        answer /= 2;
    }
    else if (sign == '×') {
        answer *= 2;
    }
})

three.addEventListener('click', ()=> {
    if (output.innerText == '0') {
        output.innerText = '3';
        
    }
    else {
        output.innerText = '3';
    }

    if (answer == 0) {
        answer = 3;
    }

    if (sign == '+') {
        answer += 3;
    }
    else if (sign == '-') {
        answer -= 3;
    }
    else if (sign == '÷') {
        answer /= 3;
    }
    else if (sign == '×') {
        answer *= 3;
    }
})

four.addEventListener('click', ()=> {
    if (output.innerText == '0') {
        output.innerText = '4';
        
    }
    else {
        output.innerText = '4';
    }

    if (answer == 0) {
        answer = 4;
    }

    if (sign == '+') {
        answer += 4;
    }
    else if (sign == '-') {
        answer -= 4;
    }
    else if (sign == '÷') {
        answer /= 4;
    }
    else if (sign == '×') {
        answer *= 4;
    }
})

five.addEventListener('click', ()=> {
    if (output.innerText == '0') {
        output.innerText = '5';
        
    }
    else {
        output.innerText = '5';
    }

    if (answer == 0) {
        answer = 5;
    }

    if (sign == '+') {
        answer += 5;
    }
    else if (sign == '-') {
        answer -= 5;
    }
    else if (sign == '÷') {
        answer /= 5;
    }
    else if (sign == '×') {
        answer *= 5;
    }
})

six.addEventListener('click', ()=> {
    if (output.innerText == '0') {
        output.innerText = '6';
        
    }
    else {
        output.innerText = '6';
    }

    if (answer == 0) {
        answer = 6;
    }

    if (sign == '+') {
        answer += 6;
    }
    else if (sign == '-') {
        answer -= 6;
    }
    else if (sign == '÷') {
        answer /= 6;
    }
    else if (sign == '×') {
        answer *= 6;
    }
})

seven.addEventListener('click', ()=> {
    if (output.innerText == '0') {
        output.innerText = '7';
        
    }
    else {
        output.innerText = '7';
    }

    if (answer == 0) {
        answer = 7;
    }

    if (sign == '+') {
        answer += 7;
    }
    else if (sign == '-') {
        answer -= 7;
    }
    else if (sign == '÷') {
        answer /= 7;
    }
    else if (sign == '×') {
        answer *= 7;
    }
})

eight.addEventListener('click', ()=> {
    if (output.innerText == '0') {
        output.innerText = '8';
        
    }
    else {
        output.innerText = '8';
    }

    if (answer == 0) {
        answer = 8;
    }

    if (sign == '+') {
        answer += 8;
    }
    else if (sign == '-') {
        answer -= 8;
    }
    else if (sign == '÷') {
        answer /= 8;
    }
    else if (sign == '×') {
        answer *= 8;
    }
})

nine.addEventListener('click', ()=> {
    if (output.innerText == '0') {
        output.innerText = '9';
        
    }
    else {
        output.innerText = '9';
    }

    if (answer == 0) {
        answer = 9;
    }

    if (sign == '+') {
        answer += 9;
    }
    else if (sign == '-') {
        answer -= 9;
    }
    else if (sign == '÷') {
        answer /= 9;
    }
    else if (sign == '×') {
        answer *= 9;
    }
})

zero.addEventListener('click', ()=> {
    if (output.innerText == '0') {
        output.innerText = '0';
        
    }
    else {
        output.innerText = '0';
    }

    if (answer == 0) {
        answer = 0;
    }

    if (sign == '+') {
        answer += 0;
    }
    else if (sign == '-') {
        answer -= 0;
    }
    else if (sign == '÷') {
        answer /= 0;
    }
    else if (sign == '×') {
        answer *= 0;
    }
})

plus.addEventListener('click', ()=> {
    if (output.innerText.slice(-1) == '+' || output.innerText.slice(-1) == '-' || output.innerText.slice(2) == '-1' || output.innerText.slice(-1) == '×') {
        alert('Please enter a number first.')
    }
    else {
        sign = '+';
    }

    console.log('Plus: ', answer)
    
})

minus.addEventListener('click', ()=> {
    if (output.innerText.slice(-1) == '+' || output.innerText.slice(-1) == '-' || output.innerText.slice(2) == '-1' || output.innerText.slice(-1) == '×') {
        alert('Please enter a number first.')
    }
    else {
        sign = '-';
    }
})

divide.addEventListener('click', ()=> {
    if (output.innerText.slice(-1) == '+' || output.innerText.slice(-1) == '-' || output.innerText.slice(2) == '-1' || output.innerText.slice(-1) == '×') {
        alert('Please enter a number first.')
    }
    else {
        sign = '÷';
    }
})

mulitiply.addEventListener('click', ()=> {
    if (output.innerText.slice(-1) == '+' || output.innerText.slice(-1) == '-' || output.innerText.slice(2) == '-1' || output.innerText.slice(-1) == '×') {
        alert('Please enter a number first.')
    }
    else {
        sign = '×';
    }
})

equal.addEventListener('click', ()=> {
    output.innerText = '' + answer;
    sign = '';

    console.log('Equal button clicked! Answer value: ', answer);
})

point.addEventListener('click', ()=> {
    output.innerText = '.';
})

clear.addEventListener('click', ()=> {
    output.innerText = '0';
    answer = 0;
    sign = '';
})
