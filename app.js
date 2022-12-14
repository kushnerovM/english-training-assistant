//elements
var wordTextbox = document.querySelector(".word-textbox");
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
//difficulties array contains difficulty-coefficient from 1 to 10
var difficultyFactors = Array(vocabulary.length).fill(1);
var current = 0;
if (selectItem(difficultyFactors) !== null)
    current = selectItem(difficultyFactors);
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
//while the data of a new word-pair is being loaded, the card turns around and turns back after loading
nextButton.addEventListener("click", function () {
    var cardRotation = function () {
        rotate(180);
        resultContainer.removeEventListener("transitionend", cardRotation);
    };
    resultContainer.addEventListener("transitionend", cardRotation);
    resultMove(true);
    setTimeout(function () {
        current = selectItem(difficultyFactors);
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
    if (difficultyFactors[current] > 1 && isValid) {
        difficultyFactors[current]--;
    }
    if (difficultyFactors[current] <= difficultyFactors.length * 2 && !isValid) {
        difficultyFactors[current]++;
    }
    resultMove(false);
}
function resultMove(isVisible) {
    if (isVisible) {
        document.querySelector(".control-group").style.display = "flex";
        resultContainer.style.height = "0%";
        document.querySelector(".result .container").style.display = "none";
        document.querySelector(".result .container").style.opacity = "0";
    }
    else {
        document.querySelector(".control-group").style.display = "none";
        resultContainer.style.height = "50%";
        document.querySelector(".result .container").style.display = "flex";
        document.querySelector(".result .container").style.opacity = "1";
    }
}
//function takse an array of numbers and returns random one, but probability of number-selection of bigger number is larger 
function selectItem(array) {
    var sum = array.reduce(function (sum, elem) { return sum += elem; });
    var rand = Math.floor(Math.random() * (sum));
    rand++;
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= rand)
            return i;
        else
            rand -= array[i];
    }
    return null;
}
//executable code
englishCaption.textContent = pair[0];
