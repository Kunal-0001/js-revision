let name="Kunal";
let repoCount=50;

console.log(`Hello, My name is ${name} and my repoCount is ${repoCount}`);

const gameName= new String('neoGame');
console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('G'));

const newString=gameName.substring(0,4);
console.log(newString);
const neoString=gameName.slice(-6,4);
console.log(neoString);

const anotherString="    kunal    ";
console.log(anotherString.trim());

const url="https://kunal.com/kunal%20singh";
console.log(url.replace('%20','-'));
console.log(url.includes('kunal'));
console.log(url.includes('rana'));

const example="My name is kunal singh";
console.log(example.split(' '));
