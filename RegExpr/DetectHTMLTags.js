/* 
    Solution for the https://www.hackerrank.com/challenges/detect-html-links
*/

let input = `<p><a href="http://www.quackit.com/html/tutorial/html_links.cfm">Example Link</a></p>
<div class="more-info"><a href="http://www.quackit.com/html/examples/html_links_examples.cfm">More Link Examples...</a></div>`;

let re = new RegExp(/(<)[^ ></]+/g);
var resArray = input.match(re).map(string => string.replace(/</,''));
var set = new Set(resArray);
var result = Array.from(set).sort();

console.log(result.toString().replace(/,/g,';'));
