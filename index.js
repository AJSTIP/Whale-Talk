let input = "never eat soggy waffles";

const vowels = [' ', 'a', 'e', 'e', 'i', 'o', 'u', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
  if (input[i] === vowels[j]) {
    resultArray.push(vowels[j]);
    }  
  }
};

console.log(resultArray.join('').toUpperCase());