/*
    Solution for the HackerRank problem - https://www.hackerrank.com/challenges/detect-the-email-addresses/problem
*/

let input = `1
Finally this phone test@regexp.com is testimony to our quest and ever open ears for hearing from our customers since 1921. We look forward to hearing from you today.
`

let re = new RegExp(`\\b([a-zA-Z0-9!#$%&'*+-/=?^_\`{|}~]{1,64})(?=@)@([a-zA-Z0-9.-]{1,255})\\b`,'g');
var set = new Set(input.match(re));
let result = "";
Array.from(set).sort().map(string => result+=`${string};`);
console.log(result.replace(/.$/, ''));


