/* 
    Solution for the https://www.hackerrank.com/challenges/find-substring/problem
*/

let input = `1
existing pessimist optimist this is
1
is
`;
let strings = input.split('\n');
// Remove first number of entries
let count = strings.shift();

// For each input string do concat to prepare the input
var toParse = "";
while (count > 0) {
    toParse += `${strings.shift()}\n`;
    count--;
}
// Get pattern, prepare the regexp and parse the input for each pattern
var patternsCount = strings.shift();
while (patternsCount > 0) {
    let matches = 0;
    let re = new RegExp(`[a-zA-Z0-9_](${strings.shift()})[a-zA-Z0-9_]`, 'g');
    result = toParse.match(re);
    // If no matches found, leace the mathes == 0
    if (result != undefined) {
        matches = result.length;
    }
    
    console.log(matches);
    patternsCount--;
}