//elements
let pair: string [] = ["English","Английский"]
const wordTextbox = document.querySelector(".word-textbox") as HTMLInputElement;
const card = document.querySelector(".card");
const englishCaption = document.querySelector(".english-caption")!;
const translatedCaption = document.querySelector(".translated-caption")!;
//variables



//event listeners
wordTextbox.addEventListener("keyup",()=>{
    if(wordTextbox.value===pair[1]){
        rotate(document.querySelector(".front")!,180);
        rotate(document.querySelector(".back")!,360);
    }   
});



//functions

function rotate (elem :HTMLElement,value: number): void {
    elem.style.transform = `perspective(500px) rotateY(${value}deg)`
}

//executable code
englishCaption.textContent=pair[0];
translatedCaption.textContent=pair[1];