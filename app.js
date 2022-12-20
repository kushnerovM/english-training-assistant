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
var pair = shuffle.apply(void 0, vocabulary[current]);
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
    var cardRotation = function () {
        rotate(180);
        resultContainer.removeEventListener("transitionend", cardRotation);
    };
    resultContainer.addEventListener("transitionend", cardRotation);
    resultMove(true);
    setTimeout(function () {
        current++;
        if (current >= vocabulary.length) {
            current = 0;
        }
        pair = shuffle.apply(void 0, vocabulary[current]);
        englishCaption.textContent = pair[0];
        wordTextbox.value = "";
        rotate(0);
    }, 1500);
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
function rotate(value) {
    document.querySelector(".front").style.transform = "perspective(500px) rotateY(".concat(value, "deg)");
    document.querySelector(".back").style.transform = "perspective(500px) rotateY(".concat(value + 180, "deg)");
}
function resultsSummering(e) {
    var isValid;
    if (e.target.id === "give-up-btn") {
        isValid = false;
    }
    else {
        isValid = wordTextbox.value.trim().toLocaleLowerCase() === pair[1];
    }
    resultContainer.style.backgroundColor = isValid ? "#1bcd68" : "#ee6352";
    resultMessage.textContent = isValid ? posResMessages[Math.floor(Math.random() * (posResMessages.length))] :
        negResMessages[Math.floor(Math.random() * (negResMessages.length))];
    rightAnswer.textContent = pair[1];
    resultMove(false);
}
function resultMove(isVisible) {
    if (isVisible) {
        resultContainer.style.height = "0%";
        document.querySelector(".result .container").style.display = "none";
        document.querySelector(".result .container").style.opacity = "0";
    }
    else {
        resultContainer.style.height = "50%";
        document.querySelector(".result .container").style.display = "flex";
        document.querySelector(".result .container").style.opacity = "1";
    }
}
//executable code
englishCaption.textContent = pair[0];
