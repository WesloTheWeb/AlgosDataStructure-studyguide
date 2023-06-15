// Skill Check
import "./styles.css";
/*########################################
QUESTION 1:
Write a JavaScript function to check whether an `input` is an array or not.

Test Data :
  console.log(is_array('w3resource'));
  console.log(is_array([1, 2, 4, 0]));
  false
  true
  
##########################################*/
// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   <div>${avg}</div>
//   <div class="inject-here" id="inject">

//   </div>
// </div>
// `;

// function average(a, b) {
//   return a + b / 2;
// }

// const avg = average(1, 2);



/*########################################
QUESTION 2:
Write a JavaScript function to clone an array.

Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
########################################*/

// const testArr = [1, 2, 4, 0];

// function cloneArray(arr) {
//   return arr.slice();
// }

// console.log(testArr)
// console.log(cloneArray(testArr))


/*########################################
QUESTION 3:
Write a JavaScript program to get all the indexes where NaN is 
found of a given array of numbers and NaN. Go to the editor

Test Data :
([2, NaN, 8, 16, 32]) -> [1]
([2, 4, NaN, 16, 32, NaN]) -> [2,5]
([2, 4, 16, 32]) ->[]

Expected Output:
Original array: 2,NaN,8,16,32
Find all indexes of NaN of the said array: 1
Original array: 2,4,NaN,16,32,NaN
Find all indexes of NaN of the said array: 2,5
Original array: 2,4,16,32
Find all indexes of NaN of the said array:

approach
1. Create a result array
1. take in our array, iterate through the array
2. If NaN found push the index of NaN to result array
3. return result array
########################################*/

function findNaN(arr) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === isNaN) {
      res.push(i);
    }
  };

  return res;
}

// console.log(typeof NaN)

// ([2, NaN, 8, 16, 32]) -> [1]
// ([2, 4, NaN, 16, 32, NaN]) -> [2,5]
// ([2, 4, 16, 32]) ->[]

const test1 = [2, NaN, 8, 16, 32] // [1]
const test2 = [2, 4, NaN, 16, 32, NaN] // [2,5]
const test3 = [2, 4, 16, 32] // []

console.log(findNaN(test1))
console.log(findNaN(test2))
console.log(findNaN(test3))


/*########################################
QUESTION: 4
Implement the willFail funcion to error so the try catch can handle it
########################################*/

try {
  console.log(ensure());
} catch (err) {
  console.log(err);
}

function ensure(value) {
  // Your code goes here

}

try {
  console.log(ensure());
} catch(err) {
  console.log(err);
}

// SOLUTION
// function willFail() {
//   throw new Error("This function is meant to fail");
// }

// try {
//   willFail();
// } catch (error) {
//   console.error("Error: ", error.message);
// }

/*########################################
QUESTION 5:
  Format the given string to output YYYYMMDD
  Example 
  input -> 12/21/2022
  output -> 20221221
########################################*/
// approach:
// toLocalString()
// function formatDate(userDate) {
//   // format from M/D/YYYY to YYYYMMDD
// }

// console.log(formatDate("12/31/2014"));

/*########################################
QUESTION 6:
implement the remove property function witch takes an object and property name, and does the following:
if the object obj has a property prop, the function removes the property from the object adn returns true;
in aother cases it returns false
########################################*/

// function removeProperty(obj, prop) {
//   return null;
// }

/*
  implenment the setup function that registers a click event 
  handler and implements the following logic 
   - when the button class remove is clicked, its parent <div> 
  elemnt should be removed from the gallery
*/
const parent = document.getElementsByClassName("image");


function setup() {
  // console.log(removeImg)
  console.log(parent);
}

// const removeImg = document.getElementsByClassName('remove');

document.body.innerHTML = `
<div class="image">
  <img src="https://bit.ly/3lmYVna" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://bit.ly/3flyaMj" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

const removeImg = document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);

/*########################################
QUESTION 6:
Write a JavaScript program to count the number of arrays inside a 
given array

Test Data :
([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3

Expected Output:
Number of arrays inside the said array: 2
Number of arrays inside the said array: 3

APPROACH
- Create our count variable
- Iterate through the array
  - if we come across an element thats an array += to our count
- Return our count variable
########################################*/

const arrTest = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]] // 2
const arrTest2 = [2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]] // 3

// console.log(arrTest);

function countNestedArrays(arr) {
  let numsOfNestedArray = 0;

  for (let element of arr) {
    if (element === typeof (Array)) {
      numsOfNestedArray += 1;
    };
  };

  return numsOfNestedArray;
}

console.log(arrTest)

console.log(countNestedArrays(arrTest)) // 2
// console.log(countNestedArrays(arrTest2)) // 3