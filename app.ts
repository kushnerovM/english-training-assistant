//elements
const wordTextbox = document.querySelector(".word-textbox") as HTMLInputElement;
const card = document.querySelector(".card");
const englishCaption = document.querySelector(".english-caption")!;
const nextButton = document.querySelector(".next-button")!;
const checkButton = document.querySelector("#check-btn")! as HTMLElement;
const giveUpButton = document.querySelector("#give-up-btn")!;
const resultContainer = document.querySelector(".result") as HTMLElement;
const resultMessage = document.querySelector(".result-message") as HTMLElement;
const rightAnswer = document.querySelector(".right-answer") as HTMLElement;

//variables
let vocabulary: [string,string][]=[
    ["cat","кот"],
    ["hello","привет"],
    ["english","английский"],
    ["belarusian","белорусский"],
    ["table","стол"]];
vocabulary = shuffle(...vocabulary);
let current:number = 0;
let pair: string [] = vocabulary[current];
const posResMessages : string[]=["Right!","Exactly","Yep!","Excelent","Well done"];
const negResMessages : string[]=["Oops!","Wrong aswer","Not Quite","Nope!","A mistake"];

//event listeners
wordTextbox.addEventListener("keyup",(e: KeyboardEvent)=>{
    if(e.key==="Enter"){
      e.preventDefault();
      checkButton.click();
    }   
});

checkButton.addEventListener("click",resultsSummering);

giveUpButton.addEventListener("click",resultsSummering);

nextButton.addEventListener("click",()=>{
    let cardRotation = ()=>{
        rotate(180);
        resultContainer.removeEventListener("transitionend",cardRotation)
    };
    resultContainer.addEventListener("transitionend",cardRotation);
    resultMove (true);
    setTimeout(()=>{
        current++;
        if(current>=vocabulary.length){current=0;}
        pair = vocabulary[current];
        englishCaption.textContent=pair[0];
        wordTextbox.value="";
        rotate(0);
    }, 2000);
});

//functions

function shuffle(...args:any[]): any[] {
    let j:number=0;
    for(let i=args.length-1;i>=0;i--){
        j=Math.floor(Math.random()*(i+1));
        [args[j],args[i]]=[args[i],args[j]];
    }
    return args
}

function rotate (value: number): void {
    (document.querySelector(".front") as HTMLElement).style.transform = `perspective(500px) rotateY(${value}deg)`;
    (document.querySelector(".back") as HTMLElement).style.transform = `perspective(500px) rotateY(${value+180}deg)`;
}

function resultsSummering (e:Event) : void {
    let isValid:boolean;
    if((e.target as HTMLElement).id==="give-up-btn") {isValid=false;} else{
        isValid=wordTextbox.value===pair[1];
    }
    resultContainer.style.backgroundColor=isValid?"#1bcd68":"#ee6352";

    resultMessage.textContent=isValid?posResMessages[Math.floor(Math.random()*(posResMessages.length))]:
        negResMessages[Math.floor(Math.random()*(negResMessages.length))];

    rightAnswer.textContent=pair[1];
    resultMove(false);
}

function resultMove (isVisible:boolean) : void {
    if(isVisible){
        resultContainer.style.height="0%";
        (document.querySelector(".result .container") as HTMLElement).style.display="none";
        (document.querySelector(".result .container") as HTMLElement).style.opacity="0";
    } else {
        resultContainer.style.height="50%";
        (document.querySelector(".result .container") as HTMLElement).style.display="flex";
        (document.querySelector(".result .container") as HTMLElement).style.opacity="1";
    }
}

//executable code
englishCaption.textContent=pair[0];