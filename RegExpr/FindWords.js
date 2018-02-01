/* 
    Solution for the problem - https://www.hackerrank.com/challenges/find-a-word/problem
*/

let input = `1
foo bar (foo) bar foo-bar foo_bar foo'bar bar-foo bar, foo.
1
foo`;
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
    let word = strings.shift();
    let re = new RegExp(`(\\b${word}\\b)+`,'g');
    let result = toParse.match(re);
    // If no matches found, leave the mathes == 0
    if (result != undefined) {
        matches = result.length;
    }
    
    console.log(matches);
    patternsCount--;
}