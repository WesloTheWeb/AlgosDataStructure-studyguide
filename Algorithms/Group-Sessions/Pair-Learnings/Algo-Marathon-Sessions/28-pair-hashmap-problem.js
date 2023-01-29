/*

You're a bartender, and you have to look out for your patrons - you don't want them to drink too much. Assume everyone is having the same drink, and everyone has the same set amount of "allowed servings".

Given an array of patrons (denoted by their names, eg: Adrian), and an integer value representing "allowed servings", return True if someone attempts to go over the allowed number of servings per person.

Otherwise, False if no one drinks too much.
Can you think of any data structures that might help?

Function Signature 
function limitedServings(patrons, allowedServings) {

def limitedServings(patrons: list[str], allowedServings: int) -> bool:

Examples
patrons = ['Joe', 'Bart', 'Henry', 'Joe', 'Carl', 'Doug', 'Joe']
allowedServings = 2
returns True because Joe went over the limit.

APPROACH
- use a hashmap track the drinks of each person, if its overf the allowedServings return true Otherwise return false

Examples
patrons = ['Joe', 'Bart', 'Henry', 'Joe', 'Carl', 'Doug', 'Joe', 'Carl', 'Bart']
numPeople = 3

Joe: 3
Bart: 1
Henry: 1
Carl: 1
Doug: 1

{
  Joe: 3
  Bart: 2
  Henry: 1
  Carl: 2
  Doug: 1
}

buckets = [0, 1, 2, 3, ...n]
buckets = [[], [Henry, Doug], [Bart, Carl], [Joe]]


[[], [Henry, Doug], [Bart, Carl], [Joe]]
[[], [Henry, Doug], [Bart, Carl], []]


Joe, Carl, Bart
*/

function limitedServings(patrons, numberOfPeople) {
    const numberOfServings = new Map();
    // let buckets = new Array(patrons.length);
    let buckets = [];
    console.log(buckets)
  
    for (let person of patrons) {
      if (numberOfServings.has(person)) {
        numberOfServings.set(person, (numberOfServings.get(person) + 1));
      } else {
        numberOfServings.set(person, 1);
      }
  
      // numOfDrinks.set(person, (numOfDrinks.get(person) || 0) + 1);
    }
  
    // evaluate the hashmap
    for (let [key, value] of numberOfServings) {
      if (buckets[value]) {
        buckets[value].push(key)
      } else {
        buckets[value] = [key]
      }
    }
  
    const results = [];
  
    while (results.length < numberOfPeople) {
      const frequency = buckets.pop();
      for (let i = 0; i < frequency.length; i++) {
        results.push(frequency[i])
  
        if (results.length === numberOfPeople) {
          break;
        }
      }
  
    }
  
    while (results.length < numberOfPeople) {
      if (!buckets[buckets.length - 1]) {
        buckets.pop();
      } else {
        results.push(buckets[buckets.length - 1].shift());
        if (!buckets[buckets.lengths - 1].length) buckets.pop();
      }
    }
  
    return results;
  
  
    // console.log(results)
    /*
  
    two cases:
      element at index is undefined
      element at index is defined (with an array)
  
    */
  
    // [undefined, undefined, undefined] << we have
    // [undefined, [Henry, doug], [bart, cart]] << we want
  }
  
  /*
  
  {
    Joe: 3
    Bart: 2
    Henry: 1
    Carl: 2
    Doug: 1
  }
  
  */
  
  const patrons = ['Joe', 'Bart', 'Henry', 'Joe', 'Carl', 'Doug', 'Joe', 'Carl', 'Bart']
  
  console.log(limitedServings(patrons, 3)); // [Joe, Bart, Carl];
  
  
  /*
  
  
  given an array of numbers, nums
  and numberOfPackets k
  
  you have to create k subarrays of nums
  find the maximum sum of the medians of the subarrays
  
  [4,2,6,8,43,104,5,5,78,4]
  k = 3
  
  
  [4,2,8] => 4
  [43,104,4] => 43
  [6,5,5,78] => 5.5 -> 6
  -> 53
  
  
  
  [3,5]
  possible medians:
    4 from [3,5]
    3 from [3]
    5 from [5] 
  
  
  [2,4,4,5,5,6,8,43,78,104] k = 3
  
  
  [2,4,4,5,5,6,8,43]
     l         r
  currentMax = 104 + 78
  
  
  
  
  given an array of nums
  
  
  
  */