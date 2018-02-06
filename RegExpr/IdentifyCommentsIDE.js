/*
    Solution of the problem - https://www.hackerrank.com/challenges/ide-identifying-comments/problem
*/

// Property to identify start of multiline comment
var isMultiLineComment = false;
// RegExp to find the single line comment
let re = new RegExp(/(\/\/.*)/);

// Crete array of input strings
let strings = input.split('\n');

strings.forEach(function(string,_,_) { 
    let result = string.match(re);
    if (result != undefined) {
        console.log(result[0].toString());
    }

    // Identify start of multiline comment
    if (/\/\*.*/g.test(string)) {
        isMultiLineComment = true;
    }

    // Identify end of multiline comment
    if (/.*\*\//g.test(string)) {
        isMultiLineComment = false;
        console.log(`${string.trim()}`);
    }

    // Output strings while it is content of  multilined comment
    if (isMultiLineComment) {
        console.log(string.trim());
        return;
    }
});