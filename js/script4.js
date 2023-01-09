const menuProject = document.querySelector(".Bagian4 .tombol .menu input")
const navProject = document.querySelector(".Sidebar4 .sidebar2")
const nav2Project = document.querySelector(".Sidebar4 .sidebar3")

// Tombol untuk Project
menuProject.addEventListener("click", () => {
    navProject.classList.toggle("slide")
})

menuProject.addEventListener("click", () => {
    nav2Project.classList.toggle("slide2")
})