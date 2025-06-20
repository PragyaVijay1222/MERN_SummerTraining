const myinput = document.getElementById("textarea");
let chars = document.getElementById("chars");
let words = document.getElementById("words");

myinput.addEventListener('input', function(){
    let inputText = myinput.value;
    
    let charCount = inputText.length;
    chars.textContent = charCount;
    
    let wordArray = inputText.trim().split(/\s+/).filter(word => word.length > 0);
    let wordCount = wordArray.length;
    words.textContent = wordCount;

});

