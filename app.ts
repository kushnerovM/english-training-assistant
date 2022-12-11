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
        document.querySelector<HTMLElement>(".front")!.style.transform = "perspective(500px) rotateY(180deg)";
        document.querySelector<HTMLElement>(".back")!.style.transform = "perspective(500px) rotateY(360deg)";
    }   
});



//functions

//executable code
englishCaption.textContent=pair[0];
translatedCaption.textContent=pair[1];