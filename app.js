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
        //document.querySelector<HTMLElement>(".front")!.style.transform = "perspective(500px) rotateY(180deg)";
        //document.querySelector<HTMLElement>(".back")!.style.transform = "perspective(500px) rotateY(360deg)";
        rotate(document.querySelector(".front"), 180);
        rotate(document.querySelector(".back"), 360);
    }
});
//functions
function rotate(elem, value) {
    elem.style.transform = "perspective(500px) rotateY(".concat(value, "deg)");
}
//executable code
englishCaption.textContent = pair[0];
translatedCaption.textContent = pair[1];
