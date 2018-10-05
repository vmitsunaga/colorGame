var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
		//add click listeners to sqaures
		squares[i].addEventListener("click" , function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		})
	}
}

function setUpModeButtons(){ 
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		})
	}
}


function reset() {
	//generate all new colors
	colors = generateRandomColor(numSquares);
	//pick a random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors os squres
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];	
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "#steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop through all the squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	//create an array
	var arr = [];
	//loop num times
	for(var i = 0; i < num; i++){
		// get random color and push it to the array
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//create "red" 0 - 255 color
	var r = Math.floor(Math.random() * 256);
	//create "green" 0 - 255 color
	var g = Math.floor(Math.random() * 256);
	//create "blue" 0 - 255 color
	var b = Math.floor(Math.random() * 256);
	//create the rgb(x, y, z) string
	return "rgb(" + r +", " + g + ", " + b +")";
}