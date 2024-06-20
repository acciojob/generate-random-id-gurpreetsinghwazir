function makeid(l) {
  // write your code here
let last = ""
	for (let i = 0; i < l; i++) {
		let num = Math.floor(Math.random() * 100)
		let st = String.fromCharCode(num);
		last = last + st ;
	}
	console.log(last)
}

// Do not change the code below.

