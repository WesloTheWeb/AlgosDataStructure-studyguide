/*
############################
SESSION 2 | Feb 2nd
############################

BASE QUESTION:
Build a URL query string parser!
  
Examples
Input: "?foo=hello&bar=world"
Output: { foo: "hello", bar: "world" }

Input: "?foo=hello&bar=world&foo2=hello&bar2=world"
Output: { foo: "hello", bar: "world", foo2: "hello", bar2: "world" }

?foo&bar=world
{ "foo": "true", bar: "world" }

Keys can be used multiple times. The resulting value for that key should be an array of all
?foo=abc&bar=world&foo=2
{ foo: ["abc", "2"], bar: "world" }

https://google.com/post.php?q=covid&bar=world
 
Time: O(n)Space: O(n)

query begins with '?'
if every k-v pair separated by =
start a dictionary/hashmap
string.split() on & and get k-v pairs
for each k-v pair, string.split() on = and get separate k-v
add k-v to dict
*/

const query = "?foo=hello&bar=world"
const query1 = "?foo="
const query2 = "?"
const query3 = "?foo=hello&bar="
const query4 = "?foo&bar=world"
const query5 = "?foo=abc&bar=world&foo=2"

function splitURL(input) {

  if (input.length === 1) return ({});

  input = input.substr(1, input.length);
  const keyValMap = {};
  let splitKeyPairs = input.split('&').forEach((str) => {
    const splitStringArray = str.split('=');
    const key = splitStringArray[0]
    const currValue = keyValMap[key]
    if (currValue === undefined) {

    }
    keyValMap[splitStringArray[0]] = splitStringArray[1] !== undefined ? splitStringArray[1] : "true";

    if (keyValMap[splitStringArray[0]] > 1) {
      return keyValMap[splitStringArray[0]].Array();
    }
  });

  return keyValMap;
}

//{ "foo": "true", bar: "world" }
//[[foo, undefined <= does not exist] [bar, world]]

console.log(splitURL(query));
console.log(splitURL(query1));
console.log(splitURL(query2));
console.log(splitURL(query3));
console.log(splitURL(query4));
console.log(splitURL(query5));  