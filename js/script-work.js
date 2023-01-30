// Navbar
const menu = document.querySelector(".work-navbar .tombol");
const muncul = document.querySelector(".work-navbar-link .work-navbar-gambar");
const muncul2 = document.querySelector(".work-navbar-link .work-navbar-links");

menu.addEventListener("click", () => {
  muncul.classList.toggle("muncul");
});
menu.addEventListener("click", () => {
  muncul2.classList.toggle("muncul");
});
// Akhiran Navbar
