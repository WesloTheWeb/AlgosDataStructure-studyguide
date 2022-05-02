/*####################
Q. Given a list of strings, return a list of string lists that groups all anagrams together. Two strings are anagrams if 
rearranging one string results in another. For the purpose of this question, a string is an anagram of itself.

Each group of anagrams should be in alphabetical order. The output should be in alphabetical order by the first elements 
of each group of anagrams.

High Level Approach:
    1. Hashmap dictionary approach, if its sorted, have a key, add to counter.
    2. if its an anagram, create sub-array.
    3. return array of sub array of anagrams as we iterate through strs.
######################*/

function groupAnagrams(strs) {
    let anagramCount = {};
    for (let str of strs) {
        // turns string into array via split, sorts the letters, rejoins input to be our sorted key "tea" => "aet"
        let sortedKey = str.split('').sort().join('');
        // here we create a key if not existing, if is existing we push it to subarray:
        (!anagramCount[sortedKey]) ? anagramCount[sortedKey] = [str] : anagramCount[sortedKey].push(str);
        /* if anagram[sortedKey] does not exist, make an entry. If does exist, push into that occurrence of same
        key to get a subarray */
    };

    return Object.values(anagramCount);
};

// Test Cases
const test1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const test2 = ['anti', 'tian', 'tin', 'an', 'tina', 'nah', 'aha', 'aint', 'it', 'int'];
const test3 = ['abba', 'baba', 'baab', 'abba', 'bbba', 'abab', 'aaab', 'aaba', 'abaa', 'aaaa', 'bbab', 'bbaa', 'abbb'];
const test4 = ['there', 'is', 'no', 'anagram', 'all', 'words', 'are', 'different', 'in', 'this', 'conveniently', 'coherent', 'sentence'];
const test5 = ['tonearms', 'longsome', 'rootages', 'angstrom', 'margents', 'storeman', 'strangle', 'tangelos', 'negators', 'mesotron', 'saleroom', 'estragon', 'garments',
    'ortolans', 'megatons', 'gloaters', 'legators', 'legrooms', 'tanglers', 'longterm', 'magnetos', 'manglers', 'tearooms',
    'onstream', 'oreganos', 'almoners', 'tremolos', 'anteroom', 'moorages', 'mongrels', 'montages', 'moonlets', 'moonrats',
    'sonogram']

console.log(groupAnagrams(test1), `ate eat tea bat nat tan`);
console.log(groupAnagrams(test2), `anti tian tin an tina nah aha aint it int`);
console.log(groupAnagrams(test3), `abba baba baab abba bbba abab aaab aaba abaa aaaa bbab bbaa abbb`);
console.log(groupAnagrams(test4), `there is no anagram all words are different in this conveniently coherent sentence`);
console.log(groupAnagrams(test5), `tonearms longsome rootages angstrom margents storeman strangle tangelos negators mesotron saleroom estragon garments ortolans megatons gloaters legators legrooms tanglers longterm magnetos manglers tearooms onstream oreganos almoners tremolos anteroom moorages mongrels montages moonlets moonrats sonogram`);

/*################################
ALTERNATE SOLUTIONS - Map method
##################################*/

function groupAnagrams2(strs) {
    const anagram_map = new Map();

    for (const entry of strs) {
        const anagram_id = Array.from(entry).sort().join('');
        if (anagram_map.has(anagram_id)) {
            anagram_map.get(anagram_id).push(entry);
        }
        else {
            anagram_map.set(anagram_id, [entry]);
        };
    };
    return Array.from(anagram_map.values());
};

// Test Cases
console.log(groupAnagrams2(test1), 'Map method solution');