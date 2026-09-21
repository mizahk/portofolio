function showPage(page) {
    document.querySelectorAll(".page").forEach(function (item) {
        item.classList.remove("active");
    });

    document.getElementById(page).classList.add("active");

    closeMenu();
}

function openMenu() {
    document.getElementById("mobileMenu").classList.add("show");
}

function closeMenu() {
    document.getElementById("mobileMenu").classList.remove("show");
}