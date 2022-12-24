//elements
const wordTextbox = document.querySelector(".word-textbox") as HTMLInputElement;
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

//difficulties array contains difficulty-coefficient from 1 to 10
let difficultyFactors : number[] = Array(vocabulary.length).fill(1);
let current: number = 0;
if(selectItem(difficultyFactors)!==null) current=selectItem(difficultyFactors)!;
let pair: string [] = shuffle(...vocabulary[current]);
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

//while the data of a new word-pair is being loaded, the card turns around and turns back after loading
nextButton.addEventListener("click",()=>{
    let cardRotation = ()=>{
        rotate(180);
        resultContainer.removeEventListener("transitionend",cardRotation)
    };
    resultContainer.addEventListener("transitionend",cardRotation);
    resultMove (true);
    setTimeout(()=>{
        current=selectItem(difficultyFactors)!;
        pair = shuffle(...vocabulary[current]);
        englishCaption.textContent=pair[0];
        wordTextbox.value="";
        rotate(0);
    }, 1500);
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
        isValid=wordTextbox.value.trim().toLocaleLowerCase()===pair[1];
    }
    resultContainer.style.backgroundColor=isValid?"#1bcd68":"#ee6352";

    resultMessage.textContent=isValid?posResMessages[Math.floor(Math.random()*(posResMessages.length))]:
        negResMessages[Math.floor(Math.random()*(negResMessages.length))];

    rightAnswer.textContent=pair[1];
    if (difficultyFactors[current]>1&&isValid){ difficultyFactors[current]--;}
    if (difficultyFactors[current]<=difficultyFactors.length*2&&!isValid){difficultyFactors[current]++;}
    resultMove(false);
}

function resultMove (isVisible:boolean) : void {
    if(isVisible){
        (document.querySelector(".control-group")as HTMLElement).style.display="flex";
        resultContainer.style.height="0%";
        (document.querySelector(".result .container") as HTMLElement).style.display="none";
        (document.querySelector(".result .container") as HTMLElement).style.opacity="0";
    } else {
        (document.querySelector(".control-group")as HTMLElement).style.display="none";
        resultContainer.style.height="50%";
        (document.querySelector(".result .container") as HTMLElement).style.display="flex";
        (document.querySelector(".result .container") as HTMLElement).style.opacity="1";
    }
}

//function takse an array of numbers and returns random one, but probability of number-selection of bigger number is larger 
function selectItem (array: number[]): number|null{
    const sum:number = array.reduce((sum,elem)=>sum+=elem);
    let rand: number = Math.floor(Math.random()*(sum));
    rand++;
    for (let i=0;i<array.length;i++){
        if(array[i]>=rand)return i; else
        rand-=array[i];
    }
    return null
    }

//executable code
englishCaption.textContent=pair[0];