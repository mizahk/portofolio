function showPage(pageName) {

    // Ambil semua halaman
    const pages = document.querySelectorAll(".page");

    // Sembunyikan semua halaman
    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    // Tampilkan halaman yang dipilih
    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }
}