//elements

const wordTextbox = document.querySelector(".word-textbox") as HTMLInputElement;
const card = document.querySelector(".card");
//variables



//event listeners
wordTextbox.addEventListener("keyup",()=>{
    if(wordTextbox.value==="Английский"){
        document.querySelector<HTMLElement>(".front")!.style.transform = "perspective(500px) rotateY(180deg)";
        document.querySelector<HTMLElement>(".back")!.style.transform = "perspective(500px) rotateY(360deg)";
    }   
});



//functions