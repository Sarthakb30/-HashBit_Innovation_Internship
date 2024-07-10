const prompt = require("prompt-sync")();
let n1 = prompt("enter the no :");
let n2 = prompt("enter the 2nd no :");
function add(n1, n2) {
  return n1 + n2;
}
function sub(n1, n2) {
  return n1 - n2;
}
function mul(n1, n2) {
  return n1 * n2;
}
function divide(n1, n2) {
  return n1 / n2;
}
console.log("1.add  2.sub 3.mul 4.divide");
let ch = prompt("enter the choice : ");
ch = Number.parseInt(ch);
switch (ch) {
  case 1:
    console.log(add(n1, n2));
    break;
  case 2:
    console.log(sub(n1, n2));
    break;
  case 3:
    console.log(mul(n1, n2));
    break;
  case 4:
    console.log(divide(n1, n2));
    break;
  default:
    console.log("enter the correct choice");
}