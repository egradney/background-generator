var cssDisplay = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("#gradient");
var gradientDirection = document.querySelector("#gradientdirection");
var randomize = document.querySelector("#randomize");

function setGradient() {
var gradientDirection = document.querySelector("#gradientdirection");
		body.style.background = "linear-gradient(" + gradientdirection.value 
		+ "," 
		+ color1.value + "," + color2.value + ")";
		cssDisplay.textContent = body.style.background + ";";
}

// function setGradient() {
//     var body.style.background;
//         switch (gradientDirection.value) {
//             case "radial":
//             console.log("testing radial");
//             break;
//             case "to left":
//             body.style.background = "linear-gradient(" + gradientdirection.value 
//             + "," 
//             + color1.value + "," + color2.value + ")";
//             cssDisplay.textContent = body.style.background + ";";
//             break;
//             case "to right":
//             body.style.background = "linear-gradient(" + gradientdirection.value 
//             + "," 
//             + color1.value + "," + color2.value + ")";
//             cssDisplay.textContent = body.style.background + ";";
//             break;
//         }
//     return "did it";
// }


function randomGradient() {
var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
var gradientDirection = document.querySelector("#gradientdirection");
	body.style.background = "linear-gradient(" + gradientdirection.value 
		+ "," 
		+ "#" + randomColor1 + "," + "#" + randomColor2 + ")";
		cssDisplay.textContent = body.style.background + ";";
		// console.log("linear-gradient(" + gradientdirection.value 
		// + "," 
		// + "#" + randomColor1 + "," + "#" + randomColor2 + ")");
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
gradientDirection.addEventListener("input", setGradient);
randomize.addEventListener("click", randomGradient);
setGradient();
































// WHAT I TRIED TO WORK ON
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var color1value = document.querySelector(".color1").value;
// var color2value = document.querySelector(".color2").value;
// var body = document.querySelector("#gradient");

// function applyColors() {
// 	body.style.background = "linear-gradient(to right, " 
// 	+ color1.value + "," + color2.value + ")";
// }

// color1.addEventListener("input", applyColors);
// color2.addEventListener("input", applyColors);
