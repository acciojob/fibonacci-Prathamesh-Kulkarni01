function fibonacci(num) {
// your code 
	if(num===1) return 0
	if(num===2||num===3) return 1
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
