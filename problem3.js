var mainNumber = 10;
var threshold = mainNumber / 2;

function isPrime(inputNumber) {
	var prime = true;
	var divisor = inputNumber;
	while(prime != false && divisor > 0) {
		divisor--;
		if(inputNumber % divisor === 0) {
			prime = false;
		};
		return prime;
	};
};

console.log(isPrime(8));

document.getElementById("answer3").innerHTML = "start";