var romanToInt = function (s) {
    const dictionary = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let res = 0;
    s.split('').forEach((num, i) => {
        if (dictionary[num] < dictionary[s[i + 1]]) {
            res -= dictionary[num];
        } else {
            res += dictionary[num];
        }
    });
};