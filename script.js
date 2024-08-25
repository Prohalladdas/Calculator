let input = document.getElementById("inputString");
let button = document.querySelectorAll("button");

let emptySting = "";

let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == '=') {
            emptySting = eval(emptySting);
            input.value = emptySting;
        } else if (e.target.innerHTML == 'AC') {
            emptySting = "";
            input.value = emptySting;
        } else if (e.target.innerHTML == 'DEL') {
            emptySting = emptySting.substring(0, emptySting.length - 1)
            input.value = emptySting;
        } else {
            emptySting += e.target.innerHTML;
            input.value = emptySting;
        };
    });
});