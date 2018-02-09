function myCheckFunction(){
	var x = [1,2,3,4,5];
	var y = [2,3,1,0,5];
	var res;


	for (var i = 0; i < x.length; i++) {
		for (var j = 0; j < y.length; j++) {
			if (x[i] != y[j]) {
				res = y[j];
			}
		}
	}

	document.getElementById("check").innerHTML = res;
}