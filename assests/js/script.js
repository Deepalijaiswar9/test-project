const mobile_nav= document.querySelector('.mobileNavbarBtn');

const nav_header = document.querySelector(".lowerHeader");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
}

nav_header.addEventListener("click", () => toggleNavbar());