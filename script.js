
let textArea = document.getElementById("textarea");
let numbrChar = document.querySelector('.numbr-char');
let btn = document.querySelector('.btn');

btn.addEventListener('click',() => {
    let character = textArea.value;
    let trimmedChar = character.replace(/\s+/g, '').length;
    numbrChar.innerText = "Number of characters:" + trimmedChar;
});
   