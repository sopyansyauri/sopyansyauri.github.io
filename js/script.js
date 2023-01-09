const menuHome = document.querySelector(".bagian1 .tombol .menu input")
const menuAbout = document.querySelector(".Bagian2 .tombol .menu input")
const menuContact = document.querySelector(".Bagian3 .tombol .menu input")
const menuProject = document.querySelector(".Bagian4 .tombol .menu input")

const navHome = document.querySelector(".sidebar .sidebar2")
const nav2Home = document.querySelector(".sidebar .sidebar3")
const navAbout = document.querySelector(".Sidebar2 .sidebar2")
const nav2About = document.querySelector(".Sidebar2 .sidebar3")
const navContact = document.querySelector(".Sidebar3 .sidebar2")
const nav2Contact = document.querySelector(".Sidebar3 .sidebar3")
const navProject = document.querySelector(".Sidebar4 .sidebar2")
const nav2Project = document.querySelector(".Sidebar4 .sidebar3")


// Tombol untuk Home
menuHome.addEventListener("click", () => {
    navHome.classList.toggle("slide")
})

menuHome.addEventListener("click", () => {
    nav2Home.classList.toggle("slide2")
})

// Tombol untuk about
menuAbout.addEventListener("click", () => {
    navAbout.classList.toggle("slide")
})

menuAbout.addEventListener("click", () => {
    nav2About.classList.toggle("slide2")
})

// Tombol untuk Contact
menuContact.addEventListener("click", () => {
    navContact.classList.toggle("slide")
})

menuContact.addEventListener("click", () => {
    nav2Contact.classList.toggle("slide2")
})

// Tombol untuk Project
menuProject.addEventListener("click", () => {
    navProject.classList.toggle("slide")
})

menuProject.addEventListener("click", () => {
    nav2Project.classList.toggle("slide2")
})