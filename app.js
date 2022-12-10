//elements
var wordTextbox = document.querySelector(".word-textbox");
var card = document.querySelector(".card");
//variables
//event listeners
wordTextbox.addEventListener("keyup", function () {
    if (wordTextbox.value === "Английский") {
        document.querySelector(".front").style.transform = "perspective(500px) rotateY(180deg)";
        document.querySelector(".back").style.transform = "perspective(500px) rotateY(360deg)";
    }
});
//functions
console.log("Hello, world!");
