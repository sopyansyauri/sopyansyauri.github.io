// Navbar
const menu = document.querySelector(".contact-navbar .tombol");
const muncul = document.querySelector(
  ".contact-navbar-link .contact-navbar-gambar"
);
const muncul2 = document.querySelector(
  ".contact-navbar-link .contact-navbar-links"
);

menu.addEventListener("click", () => {
  muncul.classList.toggle("muncul");
});
menu.addEventListener("click", () => {
  muncul2.classList.toggle("muncul");
});
// Akhiran Navbar
