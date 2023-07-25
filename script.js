function fibonacci(num) {
// your code here
	if(num===1||num===2) return 1
	let first=0;
	let sec=1;
	let sum=0;
	while(num-->1){
		sum=first+sec;
		first=sec;
		sec=sum;
	}

	return first
}

module.exports = fibonacci;
