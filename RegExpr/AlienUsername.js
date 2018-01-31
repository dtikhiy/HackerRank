/* 
    Solution for the problem - https://www.hackerrank.com/challenges/alien-username/problem
*/

let input = `3
_0898989811abced_
_abce
_09090909abcD0`;
// Define the RegExp
let re = new RegExp(/^[_.][\d]{1,}[a-zA-Z]{0,}[_]{0,1}$/);

// Split the input strings and get a number of entries
let strings = input.split('\n');
count = strings.shift();

while (count > 0) {
    let current = strings.shift();
    let res = re.exec(current)?"VALID":"INVALID";
    console.log(res);
    count--;
}