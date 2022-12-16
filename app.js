//elements
var wordTextbox = document.querySelector(".word-textbox");
var card = document.querySelector(".card");
var englishCaption = document.querySelector(".english-caption");
var nextButton = document.querySelector(".next-button");
var checkButton = document.querySelector("#check-btn");
var giveUpButton = document.querySelector("#give-up-btn");
var resultContainer = document.querySelector(".result");
var resultMessage = document.querySelector(".result-message");
var rightAnswer = document.querySelector(".right-answer");
//variables
var vocabulary = [
    ["cat", "кот"],
    ["hello", "привет"],
    ["english", "английский"],
    ["belarusian", "белорусский"],
    ["table", "стол"]
];
vocabulary = shuffle.apply(void 0, vocabulary);
var current = 0;
var pair = vocabulary[current];
var posResMessages = ["Right!", "Exactly", "Yep!", "Excelent", "Well done"];
var negResMessages = ["Oops!", "Wrong aswer", "Not Quite", "Nope!", "A mistake"];
//event listeners
wordTextbox.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        checkButton.click();
    }
});
checkButton.addEventListener("click", resultsSummering);
giveUpButton.addEventListener("click", resultsSummering);
nextButton.addEventListener("click", function () {
    rotate(document.querySelector(".front"), 180);
    rotate(document.querySelector(".back"), 360);
    var myPromise = new Promise(function (resolve, reject) {
        setTimeout(function () { return resolve("fetched"); }, 1000);
        current++;
        pair = vocabulary[current];
        document.querySelector(".result .container").style.transition = "none";
        nextButton.style.transition = "none";
    });
    myPromise.then(function () {
        resultContainer.style.height = "0%";
        resultContainer.style.transition = "none";
        wordTextbox.value = "";
        document.querySelector(".result .container").style.visibility = "hidden";
        nextButton.style.opacity = "0";
        englishCaption.textContent = pair[0];
        document.querySelector(".result .container").style.transition = "visibility .3s linear .3s";
        nextButton.style.transition = "opacity .3s linear .5s";
        resultContainer.style.transition = "height .3s ease-out .2s";
        rotate(document.querySelector(".front"), 0);
        rotate(document.querySelector(".back"), 180);
    });
});
//functions
function shuffle() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var j = 0;
    for (var i = args.length - 1; i >= 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        _a = [args[i], args[j]], args[j] = _a[0], args[i] = _a[1];
    }
    return args;
}
function rotate(elem, value) {
    elem.style.transform = "perspective(500px) rotateY(".concat(value, "deg)");
}
function resultsSummering(e) {
    var isValid;
    if (e.target.id === "give-up-btn") {
        isValid = false;
    }
    else {
        isValid = wordTextbox.value === pair[1];
    }
    resultContainer.style.backgroundColor = isValid ? "#1bcd68" : "#ee6352";
    resultMessage.textContent = isValid ? posResMessages[Math.floor(Math.random() * (posResMessages.length))] :
        negResMessages[Math.floor(Math.random() * (negResMessages.length))];
    rightAnswer.textContent = pair[1];
    resultContainer.style.height = "50%";
    document.querySelector(".result .container").style.visibility = "visible";
    nextButton.style.opacity = "1";
}
//executable code
englishCaption.textContent = pair[0];
