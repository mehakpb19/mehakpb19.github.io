const ac = document.getElementById('ac');
const back = document.getElementById('back');
const percent = document.getElementById('%');
const divide = document.getElementById('/');

const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const multiply = document.getElementById('X');

const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const minus = document.getElementById('-');

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const plus = document.getElementById('+');

const doubleZero = document.getElementById('00');
const zero = document.getElementById('0');
const decimal = document.getElementById('.');
const equals = document.getElementById('=');

let feild = document.getElementById('text-feild');
feild.addEventListener('input', function(event) {
    this.value = this.value.replace(/[^0-9+\-*\/.]/g, '');
})


function add(input) {
    feild.value = feild.value + input;
}

function result() {
    let result = math.evaluate(feild.value);
    feild.value = result;
}

function remove() {
    feild.value = '';
}

function backspace() {
    feild.value = feild.value.slice(0, -1);
}