var prime = function(n) {
var sqroot = Math.sqrt(n);
var divideTill =  Math.floor(sqroot);
if(divideTill==sqroot){
return false;
}
for(i=2;i<=divideTill; i++){
if(n%i==0){
return false;
}
}
return true;
};

var firstNprime = function(k) {
var counter = 0;
var i = 1;
var arr = [];
while(counter<k){
if(prime(i)==true){
arr.push(i);
counter++;
}
i++
}
return arr;
};

var fmt = function(arr) {
return arr.join(",");
};

var k = 100;
var fs = require('fs');
var outfile = "primeNumbersTill"+k+".txt";
var out = fmt(firstNprime(k));
fs.writeFileSync(outfile, out);
console.log("first "+k+" prime numbers are written to "+ outfile);