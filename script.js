function showPage(page) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(page).classList.add("active");
    closeMenu();
}

function openMenu() {
    document.getElementById("mobileMenu").classList.add("show");
}

function closeMenu() {
    document.getElementById("mobileMenu").classList.remove("show");
}