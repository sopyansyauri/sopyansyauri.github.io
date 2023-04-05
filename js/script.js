// Navbar
const menu = document.querySelector(".navbar .tombol");
const muncul = document.querySelector(".navbar-link .navbar-gambar");
const muncul2 = document.querySelector(".navbar-link .navbar-links");

menu.addEventListener("click", () => {
  muncul.classList.toggle("muncul");
});
menu.addEventListener("click", () => {
  muncul2.classList.toggle("muncul");
});
// Akhiran Navbar

// Animasi Ketik
const textElement = ["Web Developeer, Programmer & Designer"];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";

function ngetik() {
  if (count == textElement.length) {
    count = 0;
  }

  currentTxt = textElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector(".ketik").textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }

  setTimeout(ngetik, 200);
}

ngetik();
// Akhiran Animasi Ketik
