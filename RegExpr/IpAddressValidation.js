/* 
    Solution for the problem - https://www.hackerrank.com/challenges/ip-address-validation/problem
*/

let input = `3
This line has junk text.  
121.18.19.20  
2001:0db8:0000:0000:0000:ff00:0042:8329`;

let strings = input.split('\n');
let count = strings.shift();

let reIPv4 = new RegExp(/(\b([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\b)\.(\b([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\b)\.(\b([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\b)\.(\b([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\b)/);
let reIPv6 = new RegExp(/^((\b[0]*[1-9abcdefABCDEF]{1,3}\b)|(\b[0-9abcdefABCDEF]{1,4}\b)):((\b[0]*[1-9abcdefABCDEF]{1,3}\b)|(\b[0-9abcdefABCDEF]{1,4}\b)):((\b[0]*[1-9abcdefABCDEF]{1,3}\b)|(\b[0-9abcdefABCDEF]{1,4}\b)):((\b[0]*[1-9abcdefABCDEF]{1,3}\b)|(\b[0-9abcdefABCDEF]{1,4}\b)):((\b[0]*[1-9abcdefABCDEF]{1,3}\b)|(\b[0-9abcdefABCDEF]{1,4}\b)):((\b[0]*[1-9abcdefABCDEF]{1,3}\b)|(\b[0-9abcdefABCDEF]{1,4}\b)):((\b[0]*[1-9abcdefABCDEF]{1,3}\b)|(\b[0-9abcdefABCDEF]{1,4}\b)):((\b[0]*[1-9abcdefABCDEF]{1,3}\b)|(\b[0-9abcdefABCDEF]{1,4}\b))$/)

while (count > 0) {
    let current = strings.shift();
    if (reIPv4.test(current) || reIPv6.test(current)) {
        if (reIPv4.test(current)) {
            console.log("IPv4");
        } else {
            console.log("IPv6");
        } 
    } else {
        console.log("Neither");
    }
    count--;
}