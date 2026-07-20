let fullName = "Rehimli Refiqe";
let words = fullName.split(" ");
console.log(words[1] + " " + words[0]);

console.log(words[0][0] + " " + words[1][0]);

let word = fullName.replaceAll(" ", "");
console.log(word.length)