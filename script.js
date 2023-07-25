function fibonacci(num) {
// your code here
	let first=0;
	let sec=1;
	let sum=0;
	while(num-->0){
		sum=first+sec;
		first=sec;
		sec=sum;
	}

	return sum
}

module.exports = fibonacci;
