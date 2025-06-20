let wordArray = ["attract","judge","other", "betray", "skip", "fortune", "lease", "administration", "aidman", "persist", "torch", "tile", "survey", "engineer", "see", "proportion", "bathroom", "thanks", "nursery", "bride", "pure", "blow", "hobby", "east", "child", "Mars", "mouse", "contrary", "bean", "environment", "productive", "chart", "protest", "extort", "car", "hole", "mixture", "exploration", "spread"]

const myinput = document.getElementById("textarea");
const resultContainer = document.createElement("div");
document.body.appendChild(resultContainer);

myinput.addEventListener('input', function() {
    resultContainer.innerHTML = "";

    let inputWord = myinput.value.trim().toLowerCase();

    if (inputWord.length === 0) return;

    wordArray.forEach(function(item) {
        if (item.startsWith(inputWord)) {
            const para = document.createElement("p");
            para.textContent = item;
            resultContainer.appendChild(para);
        }
    });
});