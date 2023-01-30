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
