// Navbar
const menu = document.querySelector(".about-navbar .tombol");
const muncul = document.querySelector(
  ".about-navbar-link .about-navbar-gambar"
);
const muncul2 = document.querySelector(
  ".about-navbar-link .about-navbar-links"
);

menu.addEventListener("click", () => {
  muncul.classList.toggle("muncul");
});
menu.addEventListener("click", () => {
  muncul2.classList.toggle("muncul");
});
// Akhiran Navbar
