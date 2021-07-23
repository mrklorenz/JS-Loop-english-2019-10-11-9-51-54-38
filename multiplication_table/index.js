var result = "";
for(var i = 1; i < 10; i++) {
	for(var j = 1; j <= i; j++) {
		result += i + '*' + j + '=' + i * j + " ";
	}
	console.log(result);
	result = "";
}
