function showPage(pageName) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    closeMenu();
}


/* =========================
   OPEN MOBILE MENU
========================= */

function openMenu() {

    const menu = document.getElementById("mobileMenu");

    menu.classList.add("show");
}


/* =========================
   CLOSE MOBILE MENU
========================= */

function closeMenu() {

    const menu = document.getElementById("mobileMenu");

    menu.classList.remove("show");
}