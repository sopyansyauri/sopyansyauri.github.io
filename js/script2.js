const menuAbout = document.querySelector(".Bagian2 .tombol .menu input")
const navAbout = document.querySelector(".Sidebar2 .sidebar2")
const nav2About = document.querySelector(".Sidebar2 .sidebar3")

// Tombol untuk about
menuAbout.addEventListener("click", () => {
    navAbout.classList.toggle("slide")
})
menuAbout.addEventListener("click", () => {
    nav2About.classList.toggle("slide2")
})