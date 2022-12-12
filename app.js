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
        document.querySelector(".result").style.height = "50%";
        document.querySelector(".front").style.boxShadow = "0 0 2px 5px #04f06a";
        setTimeout(function () {
            rotate(document.querySelector(".front"), 180);
            rotate(document.querySelector(".back"), 360);
        }, 1000);
    }
});
//functions
function rotate(elem, value) {
    elem.style.transform = "perspective(500px) rotateY(".concat(value, "deg)");
}
//executable code
englishCaption.textContent = pair[0];
translatedCaption.textContent = pair[1];
