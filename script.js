const containerElement = document.querySelector(".container");

const carrers = ["Youtuber", "Webdeveloper","Software Engineer","Data Scientist","Teacher/Educator", "Photographer", "Social Media Manager","Content Writer", "Freelancer", "Digital Marketer", "Graphic Designer", "WordPress Developer"];

let carrersIndx = 0;
let characterIdx = 0;

updateText();

function updateText() {

    const career = carrers[carrersIndx];
    

    const article = ['A', 'E', 'I', 'O', 'U'].includes(career.charAt(0).toUpperCase()) ? 'an' : 'a';

    containerElement.innerHTML = `<h1>I am ${article} ${career.slice(0, characterIdx)}</h1>`;

    characterIdx++;

    
    if (characterIdx > career.length) {
        
        carrersIndx++;
        characterIdx = 0;
    }

    if (carrersIndx === carrers.length) {
        carrersIndx = 0;
    }


    setTimeout(updateText, 400);
}
