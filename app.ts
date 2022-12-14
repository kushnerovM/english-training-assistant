//elements
const wordTextbox = document.querySelector(".word-textbox") as HTMLInputElement;
const card = document.querySelector(".card");
const englishCaption = document.querySelector(".english-caption")!;
const translatedCaption = document.querySelector(".translated-caption")!;
const nextButton = document.querySelector(".next-button")!;
const checkButton = document.querySelector("#check-btn")!;
const giveUpButton = document.querySelector("#give-up-btn")!;
const resultContainer = document.querySelector(".result") as HTMLElement;

//variables
let pair: string [] = ["English","Английский"];

//event listeners
/*wordTextbox.addEventListener("keyup",()=>{
    if(wordTextbox.value===pair[1]){
        document.querySelector<HTMLElement>(".result")!.style.height="50%";
        resultContainer.style.visibility="visible";
        (nextButton as HTMLElement).style.opacity="1";
    }   
});*/

checkButton.addEventListener("click",check);

nextButton.addEventListener("click",()=>{
    rotate(document.querySelector(".front")!,180);
    rotate(document.querySelector(".back")!,360);
});

//functions

function rotate (elem :HTMLElement,value: number): void {
    elem.style.transform = `perspective(500px) rotateY(${value}deg)`
}

function check () : void{
        resultContainer.style.backgroundColor=wordTextbox.value===pair[1]?"#1bcd68":"#ee6352";
        resultContainer.style.height="50%";
        (document.querySelector(".result .container") as HTMLElement).style.visibility="visible";
        (nextButton as HTMLElement).style.opacity="1";
}

//executable code
englishCaption.textContent=pair[0];
translatedCaption.textContent=pair[1];