/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/
function addOneAndSum(arr) {
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += 1 + arr[i];
  }
  return count;
}

addOneAndSum(plusOneSum);

/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]
.flat
*/

function flatten(inputArray) {

   let flatArray = inputArray.slice(0, inputArray.length);
   
	for (let i = 0; i < flatArray.length; i++) {

		if(flatArray[i].length !== undefined) {
			let addElems = flatten(flatArray[i]);
			flatArray.splice(i, 1)
			for(let j = addElems.length - 1; j >= 0; j--) {
				flatArray.splice(i,0,addElems[j]);
			}
		}
	};
	return flatArray;





/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/


function sortMe(ABCs123s) {
	let As = [];
	let Bs = [];
	let Cs = [];
	for (let i = 0; i < ABCs123s.length / 3; i++) {
		As.push(ABCs123s[i]);
	};
	for (let i = ABCs123s.length / 3; i < ABCs123s.length * 2 / 3; i++) {
		Bs.push(ABCs123s[i]);
	};
	for (let i = ABCs123s.length * 2 / 3; i < ABCs123s.length; i++) {
		Cs.push(ABCs123s[i]);
	};

 	let reOrder = [];
	for (let i = 0; i < As.length; i++) {
		reOrder.push(As[i],Bs[i],Cs[i]);
	};
	return reOrder;
}

sortMe(arr);






/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function randomize(array) {
    let shuffleArr = array.sort(() => Math.random() - 0.5);
    /* console.log(shuffleArr); */
    return shuffleArr.slice(1);
  }
  let globalShuggle = randomize(arr);

  function isMissing(orgArr, shuffArr) {
    for (var i = 0; i < orgArr.length; i++) {
      if (shuffArr.indexOf(orgArr[i]) === -1) {
        return orgArr[i];
      }
    }
  }
  console.log(arr);
  console.log(globalShuggle);
  isMissing(arr, globalShuggle);




/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/

function longestWords(sentence) {
	let words = sentence.split(' ');
	let longestWord = words[0];
	for (let i = 1; i < words.length; i++) {
		if(words[i].length > longestWord.length) {
			longestWord = words[i];
		}
	};
	return longestWord;
}






/*////////////////

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

function sum(num1, num2) {
  let multi = [];

  for (let i = 0; i < 1000; i++) {
    if (i % num1 === 0 || i % num2 === 0) {
      multi.push(i);
    }
  }
  let tot = 0;

  for (let j = 0; j < multi.length; j++) {
    tot += multi[j];
  }
  return tot;
}

sum(3, 5);





/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is "‘tree traversal’" the output will be "tre avsl".

*/

function remove(str){
  let char = str.split("");
  
  for(let i = 0; i < char.length;i++){
    if (char.indexOf(char[i]) !== i){
      char.splice(i, 1);
      i--; 
    }
  }
  return char.join("");
}

remove("tree traversal");








/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

function add(num1, num2){
  if((!isNaN(num1)) && (!isNaN(num2))){
    return num1 + num2
  }else{
    return function(num2){
      return num1 + num2
    }
  }
}









