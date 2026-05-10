const mobileNav = document.querySelector(".nav-two");

if (mobileNav) {
    const menuToggle = mobileNav.querySelector(".mobile-menu-toggle");
    const mobileLinks = mobileNav.querySelector(".mobile-nav-links");
    const navLinks = mobileLinks ? mobileLinks.querySelectorAll("a") : [];

    const setMenuState = (isOpen) => {
        mobileNav.classList.toggle("mobile-nav-open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
        mobileLinks.setAttribute("aria-hidden", String(!isOpen));

        navLinks.forEach((link) => {
            link.tabIndex = isOpen ? 0 : -1;
        });
    };

    if (menuToggle && mobileLinks) {
        setMenuState(false);

        menuToggle.addEventListener("click", () => {
            setMenuState(!mobileNav.classList.contains("mobile-nav-open"));
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", () => setMenuState(false));
        });

        document.addEventListener("click", (event) => {
            if (!mobileNav.contains(event.target)) {
                setMenuState(false);
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                setMenuState(false);
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 480) {
                setMenuState(false);
            }
        });
    }
}
