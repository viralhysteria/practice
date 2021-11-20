var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "easy" ? numSquares = 3: numSquares = 6;
            reset();s
        });
    }
}

function setupSquares() {
for(var i = 0; i < squares.length; i++){
    //click listener
    squares[i].addEventListener("click", function(){
        //get color
        var clickedColor = this.style.backgroundColor;
        //compare
        console.log(clickedColor, pickedColor);
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "CORRECT";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.style.color = "#fff";
            resetButton.style.backgroundColor = clickedColor;
            reset.textContent = "play again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "TRY AGAIN"
        }
    });
    }
}

function reset() {
colors = genRandColors(numSquares);
    //get rand from arr
    pickedColor = pickColor();
    //change header
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "new colors";
    messageDisplay.textContent = "";
    //change square
    for(var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
            } else {
            squares[i].style.display = "none";
            }
        }
    h1.style.backgroundColor = "steelblue";
    resetButton.style.color = "steelblue";
    resetButton.style.backgroundColor = "#fff";
}


resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color){
    //loop
    for(var i = 0; i < colors.length; i++){
        //change
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}

function genRandColors(num) {
    //define arr
    var arr = []
    //add num to arr
    for(var i = 0; i < num; i++){
        //get randColor and push to arr
        arr.push(randColor());
    }
    //return arr
    return arr;
}

function randColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}