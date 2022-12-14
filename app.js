//elements
var wordTextbox = document.querySelector(".word-textbox");
var card = document.querySelector(".card");
var englishCaption = document.querySelector(".english-caption");
var translatedCaption = document.querySelector(".translated-caption");
var nextButton = document.querySelector(".next-button");
var checkButton = document.querySelector("#check-btn");
var giveUpButton = document.querySelector("#give-up-btn");
var resultContainer = document.querySelector(".result");
//variables
var pair = ["English", "Английский"];
//event listeners
/*wordTextbox.addEventListener("keyup",()=>{
    if(wordTextbox.value===pair[1]){
        document.querySelector<HTMLElement>(".result")!.style.height="50%";
        resultContainer.style.visibility="visible";
        (nextButton as HTMLElement).style.opacity="1";
    }
});*/
checkButton.addEventListener("click", check);
nextButton.addEventListener("click", function () {
    rotate(document.querySelector(".front"), 180);
    rotate(document.querySelector(".back"), 360);
});
//functions
function rotate(elem, value) {
    elem.style.transform = "perspective(500px) rotateY(".concat(value, "deg)");
}
function check() {
    resultContainer.style.backgroundColor = wordTextbox.value === pair[1] ? "#1bcd68" : "#ee6352";
    resultContainer.style.height = "50%";
    document.querySelector(".result .container").style.visibility = "visible";
    nextButton.style.opacity = "1";
}
//executable code
englishCaption.textContent = pair[0];
translatedCaption.textContent = pair[1];
