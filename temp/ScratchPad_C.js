function groupAnagrams(strs) {
    /*
    1. Hashmap dictionary approach, if its sorted, have a key, add to counter.
    2. if its an anagram, create sub-array.
    3. return array of sub array of anagrams as we iterate through strs.
    */
    let anagramCount = {};

    for (let str of strs) {
        let sortedKey = str.split('').sort().join(''); // sorts the letters of input to be key

        // here we create a key if not existing, if is existing we push it to subarray:
        (!anagramCount[sortedKey]) ? anagramCount[sortedKey] = [str] : anagramCount[sortedKey].push(str);
    };

    return Object.values(anagramCount);
};

function splitWords(s) {
    return s == "" ? [] : s.split(' ');
}

function* main() {
    const strs = splitWords(yield);
    const res = groupAnagrams(strs);
    for (const row of res) {
        row.sort();
    }
    res.sort();
    for (const row of res) {
        console.log(row.join(' '));
    }
}

class EOFError extends Error { }
{
    const gen = main();
    const next = (line) => gen.next(line).done && process.exit();
    let buf = '';
    next();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (data) => {
        const lines = (buf + data).split('\n');
        buf = lines.pop();
        lines.forEach(next);
    });
    process.stdin.on('end', () => {
        buf && next(buf);
        gen.throw(new EOFError());
    });
}
