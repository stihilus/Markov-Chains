var order = 6;
var ngrams = {};
var button;

function setup() { 
	noCanvas();

	for (var i = 0; i <= txt.length - order; i++) {
		var gram = txt.substring(i, i + order);

		if (!ngrams[gram]) {
			ngrams[gram] = [];	
		} 
		ngrams[gram].push(txt.charAt(i + order));
		
	}

	button = createButton("generate");
	button.mousePressed(markovIt);

	console.log(ngrams);
} 


function markovIt() {

	var currentGram = txt.substring(0, order);
	var result = currentGram;

	for (var i = 0; i < 500; i ++) {
	var possibilities = ngrams[currentGram];
	if (!possibilities) {
		break;
	}
	var next = random(possibilities);
	result += next;
	var len = result.length;
	currentGram = result.substring(len - order, len);
	}
	createP(result);
}