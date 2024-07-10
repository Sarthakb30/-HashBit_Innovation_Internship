
/*Q3) let string = 'INDIA'
output = 'INDONESIA'
Use array.splice
*/

let string = 'INDIA';
let charArray = string.split(''); // Convert the string to an array of characters

charArray.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A'); // Replace 'I' at index 3 with 'O', 'N', 'E', 'S', 'I', 'A'

let newString = charArray.join(''); // Convert the array back to a string

console.log(newString); // Output the modified string

