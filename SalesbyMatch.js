'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
        let pairs = 0;
        var frequencyArray = new Array(n);
        let frequencyTemp = -1;
        for (let i = 0; i < n; i++) 
        {
            let count = 1;
            for (let j = i + 1; j < n; j++) 
            {
                if (ar[i] == ar[j]) 
                {
                    count++;
                    frequencyArray[j] = frequencyTemp;
                }
            }
            if (frequencyArray[i] != frequencyTemp) 
            {
                frequencyArray[i] = count;
            }
        }

        for (let i = 0; i < n; i++) 
        {
            if (frequencyArray[i] != frequencyTemp) 
            {
                 if(frequencyArray[i]%2 != 0){
                     frequencyArray[i]-=1;
                 }
                let divide = frequencyArray[i] / 2;
                pairs += divide;
            }
        }
        return pairs;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
