//elements
const wordTextbox = document.querySelector(".word-textbox") as HTMLInputElement;
const card = document.querySelector(".card");
const englishCaption = document.querySelector(".english-caption")!;
const translatedCaption = document.querySelector(".translated-caption")!;
const nextButton = document.querySelector(".next-button")!;
const resultContainer = document.querySelector(".result .container") as HTMLElement;

//variables
let pair: string [] = ["English","Английский"];

//event listeners
wordTextbox.addEventListener("keyup",()=>{
    if(wordTextbox.value===pair[1]){
        document.querySelector<HTMLElement>(".result")!.style.height="50%";
        resultContainer.style.visibility="visible";
        (nextButton as HTMLElement).style.opacity="1";
       // document.querySelector<HTMLElement>(".front")!.style.boxShadow="0 0 2px 5px #04f06a";
    }   
});

nextButton.addEventListener("click",()=>{
    rotate(document.querySelector(".front")!,180);
    rotate(document.querySelector(".back")!,360);
});

//functions

function rotate (elem :HTMLElement,value: number): void {
    elem.style.transform = `perspective(500px) rotateY(${value}deg)`
}

//executable code
englishCaption.textContent=pair[0];
translatedCaption.textContent=pair[1];