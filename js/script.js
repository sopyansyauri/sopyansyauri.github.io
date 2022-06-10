const textElement = ["Web Developer", "Grafic Designer"];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";

function ngetik() {
    if(count == textElement.length) {
        count = 0;
    }

    currentTxt = textElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector(".efek-mengetik").textContent = words;

    if(words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 500);

}

ngetik();
