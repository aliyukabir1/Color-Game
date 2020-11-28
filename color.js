 // Dom Selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// default number of squares
var numSquare = 6;

// generate random colors
var colors = generateColors(numSquare)

// pick a color from the generated colors
var pickedColor = pickColor();

// display picked color code
colorDisplay.textContent = pickedColor;

// difficulty switch
modeButtons.forEach(modeButton => {
	modeButton.addEventListener('click',()=>{
		modeButtons.forEach(modeButton=> modeButton.classList.remove('selected'));
		modeButton.classList.add('selected');
		modeButton.textContent == "Easy" ? numSquare = 3: numSquare = 6;
		reset();
	})
})

// the game flow
for(var i = 0;i < squares.length;i++){
 squares[i].style.background = colors[i];
 squares[i].addEventListener("click",function(){
var selectedColor = this.style.background;
if(selectedColor === pickedColor){
	messageDisplay.textContent = "Correct!";
	resetButton.textContent ="play Again?"
	changeColor(selectedColor);
	h1.style.backgroundColor = selectedColor;
}
else{
	this.style.backgroundColor ="#232323";
	messageDisplay.textContent = "Try Again!";
}
 });
}


resetButton.addEventListener("click",reset);

function changeColor(color){
	squares.forEach(square => square.style.backgroundColor = color);
}

function pickColor(){
	var random = Math.floor(Math.random()* colors.length);
	return colors[random];
}


function generateColors(num){
//make anarray
var arr = [];
//add randiom number to em
for (var i = 0; i < num; i++) {
	arr.push(randomColor ())
}
//return array
return arr;
}


function randomColor(){
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
function reset(){
	colors = generateColors(numSquare);
	pickedColor = pickColor();
	messageDisplay.textContent = "";
	resetButton.textContent = "NEW colors";
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	for(var i = 0;i<squares.length;i++){
		if (colors[i]) {
			squares[i].style.display= "block";
		squares[i].style.backgroundColor = colors[i];
	}else{
		squares[i].style.display = "none";
	}
	}
}