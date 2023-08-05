/* ARRAY METHODS
 Just a note of array methods quick reference even some not used a lot.
 - Typically filter(), reduce() would rarely be used in algorithms since not efficient in time complexity,
 but sort() does have its uses here and there.
*/

// Test Array Cases
const numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];;
const lettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const wordsArray = ['apple', 'banana', 'carrot', 'durian', 'eggplant', 'figs', 'grapes'];
const locationsArray = ['San Francisco', 'Los Angeles', 'Chicago', 'New York City',];
const charactersArray = [
    {
        name: 'Peter Quill',
        race: 'Half Human, Half Celestial',
        age: 34
    },
    {
        name: 'Gamora',
        race: 'Zen-Whoberi mutate',
        age: 35
    },
    {
        name: 'Rocket Raccoon',
        race: 'Genetically-Modfied Raccoon',
        age: 15
    },
    {
        name: 'Groot',
        race: 'Sentient floral creature',
        age: 14
    },
    {
        name: 'Drax the Destroyer',
        race: 'Kylosian',
        age: 54
    },
    {
        name: 'Nebula',
        race: 'Half-Luphomoids, Half-Cyborg',
        age: 30
    },
    {
        name: 'Mantis',
        race: 'Insectoid',
        age: 31
    },
];

/*#############
// ! Splice () Method
###############
Adds/removes items to/from an array, and returns the removed item(s).	

Note that the splice() method directly modifies the original array.
 The examples below demonstrate how to delete, replace, and insert elements in both simple arrays and arrays of objects.

Func. Signature:
array.splice(start, deleteCount, ...items)	

- start: index at which to start changing the array. 
- deleteCount (optional): number of elements to remove. 
- items (optional): elements to add to the array.

Note: We replaced 3, 4, 5 with 11, 12. 
This made the array shorter by one element because we removed three elements but only added two back.
*/
// Using splice on numericArray to remove numbers 3, 4, and 5 and replace them with 11, 12
numericArray.splice(2, 3, 11, 12);
console.log(numericArray); // [1, 2, 11, 12, 6, 7, 8, 9, 10]

// Using splice on lettersArray to remove 'c' and 'd'
lettersArray.splice(2, 2);
console.log(lettersArray); // ['a', 'b', 'e', 'f', 'g']

// Using splice on wordsArray to insert 'peach' and 'mango' after 'banana'
wordsArray.splice(2, 0, 'peach', 'mango');
console.log(wordsArray); // ['apple', 'banana', 'peach', 'mango', 'carrot', 'durian', 'eggplant', 'figs', 'grapes']

// Using splice on locationsArray to replace 'Chicago' with 'Boston'
locationsArray.splice(2, 1, 'Boston');
console.log(locationsArray); // ['San Francisco', 'Los Angeles', 'Boston', 'New York City']

// Using splice on charactersArray to remove 'Rocket Raccoon' and add a new character
const newCharacter = {
    name: 'Yondu',
    race: 'Centaurian',
    age: 40
};
charactersArray.splice(2, 1, newCharacter);
console.log(charactersArray); // Array now includes Yondu and doesn't include Rocket Raccoon

/*#############
// ! Slice () Method
###############
Returns a shallow copy of a portion of an array into a new array object. Does not modify the original array.	

The slice() method does not modify the original array. Instead, 
it returns a shallow copy of a portion of the original array.

Notice that the slice() method uses two indices: begin and end. 
It will extract up to but not including the end index. 

This is why, for example, when we slice from 2 to 4, it includes the elements at indices 2 and 3 but not 4.
*/
// Using slice on numericArray to get numbers 3, 4, and 5
const slicedNumeric = numericArray.slice(2, 5);
console.log(slicedNumeric); // [3, 4, 5]

// Using slice on lettersArray to get 'c' and 'd'
const slicedLetters = lettersArray.slice(2, 4);
console.log(slicedLetters); // ['c', 'd']

// Using slice on wordsArray to get words from 'banana' to 'durian' (inclusive)
const slicedWords = wordsArray.slice(1, 4);
console.log(slicedWords); // ['banana', 'carrot', 'durian']

// Using slice on locationsArray to get cities from 'Los Angeles' to 'Chicago' (inclusive)
const slicedLocations = locationsArray.slice(1, 3);
console.log(slicedLocations); // ['Los Angeles', 'Chicago']

// Using slice on charactersArray to get the first three characters
const slicedCharacters = charactersArray.slice(0, 3);
console.log(slicedCharacters); // Returns the objects for Peter Quill, Gamora, and Rocket Raccoon

/*#############
// * Some () Method
###############
Tests whether AT LEAST ONE ELEMENT in the array passes the test implemented by the provided function. 
It returns a Boolean value.

- Good for finding out if something is an array.
Func. Signature:
array.some(callback(element, index, array), thisArg)
*/

// test case with array of numbers
const aNumberAbove5 = numericArray.some(num => num > 5); // true;
console.log(aNumberAbove5);

// Test Case w/ array of letters
const isBPresent = lettersArray.some(letter => letter === 'b'); // true
console.log(isBPresent);

const isSanFranciscoHere = locationsArray.some(place => place === 'San Francisco'); // true
console.log(isSanFranciscoHere);

// test case with an array of an object
const isAGuardian = charactersArray.some(character => character.age > 50) // true
console.log(isAGuardian); // True, 

/*#############
// * Every() Method
###############
Tests whether ALL elements in the array pass the test implemented by the provided function. 
It returns a Boolean value.	.

Func. Signature:

*/
const lengthCheck = lettersArray.every(letterLength => letterLength.length === 1); // true;
console.log(lengthCheck); // true

const humanCheck = charactersArray.every(character => character.race === 'human');
console.log(humanCheck) // false

/*#############
// * Find() Method
###############
Returns the value of the first element in the array that satisfies the provided testing function. 
Otherwise undefined is returned.	

Func. Signature:

*/
const findFirstNumber = numericArray.find(num => num > 3);
console.log(findFirstNumber); // 4

/*#############
// * findIndex() Method
###############
Returns the index of the first element in the array that satisfies the provided testing function. 
Otherwise, it returns -1, indicating that no element passed the test.	

Func. Signature:

*/
const findIndexOf7 = numericArray.findIndex(num => num === 7);
console.log(findIndexOf7); // 6

/*#############
// * includes() Method
###############
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

Func. Signature:

*/
const doesItHave = wordsArray.includes('apple');
console.log(doesItHave); // True