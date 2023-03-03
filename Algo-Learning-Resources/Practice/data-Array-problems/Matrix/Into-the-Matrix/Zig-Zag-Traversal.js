function zigzag(input) {
    let output = []; // initialize the new one-dimensional array

    for (let i = 0; i < input.length; i++) {
        let row = input[i];
        if (i % 2 === 0) { // even rows
            for (let j = 0; j < row.length; j++) {
                output.push(row[j]);
            }
        } else { // odd rows
            for (let j = row.length - 1; j >= 0; j--) {
                output.push(row[j]);
            };
        };
    };
    return output;
};