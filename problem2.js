var increment = 1;
var total = 0;
var prevTotal = 0;
var evensTotal = 0;

while(total < 4000000) {
	prevTotal = total; 
	total += increment; 
	increment = prevTotal; 
	if (total % 2 === 0) {
		evensTotal += total;
	};
};

document.getElementById("answer2").innerHTML = evensTotal;