// =============================================== FOR NAVBAR OPEN / CLOSE 
// ================================================

document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navList = document.getElementById("mainListDiv");
    const toggle = document.getElementById("menu-toggle");

    // Toggle Menu + Scroll Lock
    navToggle?.addEventListener("click", () => {
        navToggle.classList.toggle("active");
        navList.classList.toggle("showing");
        navToggle.textContent = navToggle.classList.contains("active") ? "✖" : "☰";
        document.body.style.overflow = navList.classList.contains("showing") ? "hidden" : "auto";
    });

    // If extra toggle exists
    toggle?.addEventListener("change", () => {
        document.body.style.overflow = toggle.checked ? "hidden" : "auto";
    });
});

document.getElementById("menu-toggle").addEventListener("change", function () {
    document.body.classList.toggle("menu-open", this.checked);
});


// =========================================== FOR DARK MODE 
// =============================================

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', 'null')
}

if (darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

// ============================================== MIAN-SECTION-SLIDER
// ==================================================

const slider1 = document.getElementById("slider1");

function makeLargeCardFirst(card) {
    if (!card.classList.contains("large")) {
        slider1.querySelectorAll(".card").forEach(c => c.classList.remove("large"));
        slider1.prepend(card);
        card.classList.add("large");
    }
}

slider1.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        makeLargeCardFirst(card);
    });
});


// ================================================  SLIDER-CATEGORY 
// ====================================================

const slides = [...document.querySelectorAll(".slide")],
    slider = document.getElementById("sliderContainer");
let i = 0;

const center = () => slider.scrollTo({
    left: slides[i].offsetLeft - slider.clientWidth / 2 + slides[i].offsetWidth / 2,
    behavior: "smooth"
});

const setActive = () => (
    slides.forEach((s, x) => s.classList.toggle("active", x === i)),
    center()
);

document.querySelector(".left-btn").onclick = () => { i = (i - 1 + slides.length) % slides.length; setActive(); };
document.querySelector(".right-btn").onclick = () => { i = (i + 1) % slides.length; setActive(); };
slides.forEach((s, x) => s.onclick = () => { i = x; setActive(); });
window.addEventListener("load", center);
window.addEventListener("resize", center);


// ===================================================  PRODUCT-SECTION ( HERAT )
// ======================================================

const hearts = document.querySelectorAll(".heart");

hearts.forEach(heart => {
    heart.addEventListener("click", () => {
        heart.classList.toggle("active");
    });
});
