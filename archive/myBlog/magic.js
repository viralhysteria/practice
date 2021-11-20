// var prompt = prompt("input?");
// alert("%input%" + prompt + " = output");

var str = "test"
for(var i = 0; i < str.length; i++) {
	console.log(str[i]);
}

for(var i = 10; i <= 20; i += 1){
	if(i % 2 === 0) {
		console.log(i);
	}
}

for(var i = 300; i <= 311; i++) {
	if(i % 2 !== 0) {
		console.log(i);
	}
}

console.log('world');

function doge() {
	console.log('v good');
}

doge();

// function square(x) {
// 	return x * x;
// }

var sayHi = function () {
	console.log('sayHi hello');
}

sayHi();
sayHi = 34;
console.log(sayHi)

function test(x) {
	return x*2;
	console.log(x);
	return x/2;
}

test(40);

// function isEven(num){
// 	if(num % 2 === 0) {
// 		return true;
// 	} else { 
// 		return false; }
// 	}
// }

function isEven(num) {
	return num % 2 === 0;
	}

function factorial(num) {
	//define result var
	var result = 1;	
    //calc fact and store val in result
    for (var i = 2; i <= num; i++) {
    	result *= i;
    }
	//return result var
	return result;
}

function kebabtoSnake(str) {
	//replace all '-' with "="'s
	var newStr = str.replace(/-/g , "_");
	//return Str
	return newStr;
}

var num = 8;
function doMath() {
	num += 1;
	if(num % 5 == 0) {
		return true
	} else {
		return false
	}
}

var friends = ["dog", "cat", "moo"];

console.log(friends[1]) //cat

console.log(friends[0] + friends[2]);

var dogs = ["boi", " vinka", " cligg"];

console.log(dogs.length);

dogs.push(" burt"); //add elem
console.log("PUSH: " + dogs);
dogs.pop(); //remove last elem
console.log("POP: " + dogs);
dogs.shift(); // remove first elem
console.log("SHIFT: " + dogs);
dogs.unshift("zook") //add elem to front of array
console.log("UNSHIFT: " + dogs);

{"username":"pibacco","password":"2nBENfqMVf68"}