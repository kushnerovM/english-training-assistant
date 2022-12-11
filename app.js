//elements
var pair = ["English", "Английский"];
var wordTextbox = document.querySelector(".word-textbox");
var card = document.querySelector(".card");
var englishCaption = document.querySelector(".english-caption");
var translatedCaption = document.querySelector(".translated-caption");
//variables
//event listeners
wordTextbox.addEventListener("keyup", function () {
    if (wordTextbox.value === pair[1]) {
        document.querySelector(".front").style.transform = "perspective(500px) rotateY(180deg)";
        document.querySelector(".back").style.transform = "perspective(500px) rotateY(360deg)";
    }
});
//functions
//executable code
englishCaption.textContent = pair[0];
translatedCaption.textContent = pair[1];
