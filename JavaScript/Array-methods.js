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
Some () Method
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
Every() Method
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
Find() Method
###############
Returns the value of the first element in the array that satisfies the provided testing function. 
Otherwise undefined is returned.	

Func. Signature:

*/
const findFirstNumber = numericArray.find(num => num > 3);
console.log(findFirstNumber); // 4

/*#############
findIndex() Method
###############
Returns the index of the first element in the array that satisfies the provided testing function. 
Otherwise, it returns -1, indicating that no element passed the test.	

Func. Signature:

*/
const findIndexOf7 = numericArray.findIndex(num => num === 7);
console.log(findIndexOf7); // 6

/*#############
includes() Method
###############
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

Func. Signature:

*/
const doesItHave = wordsArray.includes('apple');
console.log(doesItHave); // True