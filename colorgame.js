var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")
/*var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");*/
/*var modeButtons = document.querySelectorAll(".mode")*/


init();

function init(){
	//mode buttons event listeners
	for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		/*if(this.textContent ==="Easy"){
			numSquares = 3;
		}else{
			numSquares = 6;
		}*/
		reset();
		//figure out how many squares to show
		//pick new colors
		//pick a picked colors
		//update the page to reflect changes
	});	
	}

//ADD CLICK LISTENERS TO SQAURES
		squares[i].addEventListener("click", function(){
			//GRAB COLOR OF CLICKED SQUARE
			var clickedColor = this.style.backgroundColor;
			//COMPARE COLOR TO PICKED COLOR
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
						
			}else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});

			reset();
}


for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		/*if(this.textContent ==="Easy"){
			numSquares = 3;
		}else{
			numSquares = 6;
		}*/
		reset();
		//figure out how many squares to show
		//pick new colors
		//pick a picked colors
		//update the page to reflect changes
	});
	

}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match new colors
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	//change colors of squares
	for (var  i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";		}
	}

	h1.style.backgroundColor = "#8C8881";
	

}
/*easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});*/

resetButton.addEventListener("click", function() {
	reset();

});

colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {

		//ADD CLICK LISTENERS TO SQAURES
		squares[i].addEventListener("click", function(){
			//GRAB COLOR OF CLICKED SQUARE
			var clickedColor = this.style.backgroundColor;
			//COMPARE COLOR TO PICKED COLOR
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
						
			}else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});

		function changeColors(color){
			//LOOP THROUGH ALL SQUARES
			for (var i = 0; i < squares.length; i++) {
				//CHANGE EACH COLOR TO MATCHED COLORS
				squares[i].style.backgroundColor = color;	
				}
		}
	}

	function pickColor() {
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}

	function generateRandomColors(num) {
		//make an array
		var arr = [];
		//add num random colors to array
		for (var i = 0; i < num; i++){
		//get random color and push into array
			arr.push(randomColor());
		}
		//return that array
		return arr;
	}

	function randomColor(){
		//pick a red from 0 to 255
		var r = Math.floor(Math.random() * 256);
		//pick a green from 0 to 255
		var g = Math.floor(Math.random() * 256);
		//pick a blue from 0 to 255
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";

	}


