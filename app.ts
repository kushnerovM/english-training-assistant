//elements
const wordTextbox = document.querySelector(".word-textbox") as HTMLInputElement;
const card = document.querySelector(".card");
const englishCaption = document.querySelector(".english-caption")!;
const translatedCaption = document.querySelector(".translated-caption")!;
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
let pair: string [] = vocabulary[0];
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
    rotate(document.querySelector(".front")!,180);
    rotate(document.querySelector(".back")!,360);
    //let promise = new Promise()
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

function rotate (elem :HTMLElement,value: number): void {
    elem.style.transform = `perspective(500px) rotateY(${value}deg)`
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
    resultContainer.style.height="50%";
    (document.querySelector(".result .container") as HTMLElement).style.visibility="visible";
    (nextButton as HTMLElement).style.opacity="1";
}

//executable code
englishCaption.textContent=pair[0];
translatedCaption.textContent=pair[1];