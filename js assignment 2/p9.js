/*Q9) Write a function to count the number of words in a paragraph.*/

function countWords(paragraph) {
    // Split the paragraph into words using spaces and filter out empty strings
    let words = paragraph.trim().split(/\s+/);
    return words.length;
}

// Example usage:
let paragraph = "This is a sample paragraph to count the number of words.";
let wordCount = countWords(paragraph);
console.log(`Number of words: ${wordCount}`); // Output: Number of words: 9
