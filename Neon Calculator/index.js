const userInput = document.getElementById("userInput");
var expression = "";
function press(num) {
    expression += num;
    userInput.value = expression;
}
function equal() {
    userInput.value = eval(expression);
    expression = ''
    // eval is a Built-In function
}
function erase() {
    expression = '';
    userInput.value = expression;
}
function del() {
    expression = expression.slice(0, -1);
    userInput.value = expression;
}
