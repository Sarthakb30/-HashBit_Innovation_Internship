/**
 Q5) Write a function to replace wrong word with correct word in any sentance.
Like this - correctfn(string, wrong, correct)
Use string.replace in function.

 */


function correctfn(string, wrong, correct) {
    // Use the global and case-insensitive flags to replace all occurrences of the wrong word
    let regex = new RegExp(wrong, 'gi');
    return string.replace(regex, correct);
}

// Example usage:
let sentence = "This is a smple sentence with a wrong word smple.";
let wrongWord = "smple";
let correctWord = "sample";

let correctedSentence = correctfn(sentence, wrongWord, correctWord);
console.log(correctedSentence); // Output: "This is a sample sentence with a wrong word sample."
