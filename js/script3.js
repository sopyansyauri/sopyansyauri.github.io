const menuContact = document.querySelector(".Bagian3 .tombol .menu input")
const navContact = document.querySelector(".Sidebar3 .sidebar2")
const nav2Contact = document.querySelector(".Sidebar3 .sidebar3")

// Tombol untuk Contact
menuContact.addEventListener("click", () => {
    navContact.classList.toggle("slide")
})
menuContact.addEventListener("click", () => {
    nav2Contact.classList.toggle("slide2")
})