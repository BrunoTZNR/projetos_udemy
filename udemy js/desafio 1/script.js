var a = 10;
var b = 20;
var c = null;

document.write(`A: ${a}<br>B: ${b}<br>C: ${c} <hr>`)

c = a
a = b
b = c
c = null

document.write(`A: ${a}<br>B: ${b}<br>C: ${c}`)