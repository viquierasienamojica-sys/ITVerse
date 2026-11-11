
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    const year = document.getElementById("year");

    if (menuToggle && mainNav) {
        function closeMenu() {
            mainNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
            menuToggle.textContent = "☰";
        }

        menuToggle.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                closeMenu();
                menuToggle.focus();
            }
        });

        document.addEventListener("click", event => {
            if (
                !mainNav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                closeMenu();
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 700) {
                closeMenu();
            }
        });
    }

    if (year) {
        year.textContent = new Date().getFullYear();
    }
});
