var input = 13195;
var factors = [];
var primes = [];
var isPrime = true;

for (i = 2; i <= input/2; i++) {
	//divide input by each i, test if the result is a whole integer
	if (input % i === 0) {
		factors.push(i);
		//if it is, its a factor! add it to the list of factors
	}
};

//output the factors found so far
for (i = 0; i < factors.length; i++) {
	console.log("factoro: " + factors[i]);
};

for (i = 0; i < primes.length; i++) {
	console.log("primo: " + primes[i]);
};

//test whether each factor is a prime or not
for (i = 0; i < factors.length; i++) {
	for (j = 2; j < factors[i]/2; j++) {
		if (factors[i] % j === 0) {
			console.log("Factor " + factors[i] + " is NOT primo!");
			isPrime = false;
			break;
		};
	};
	
	if (isPrime === true) {
		primes.push(factors[i]);
	}

	isPrime = true;
};

//output the prime factors to the page
document.getElementById("answer3").innerHTML = primes;