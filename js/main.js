let backtop = document.getElementById("backtop");

function toggleBacktop() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        backtop.classList.add("backtop-show");
    } else {
        backtop.classList.remove("backtop-show");
    }
}

const loading = document.getElementById("loading");

const loadingDuration = 1000;

setTimeout(() => {
    loading.classList.add("loading-none");
}, loadingDuration);

window.addEventListener("scroll", function () {
    toggleBacktop();
});

// light-dark start
let modeBtn = document.getElementById("mode__btn");

modeBtn.addEventListener("click", function () {
    if (document.body.className != "dark") {
        this.firstElementChild.src = "../images/light.svg";
    } else {
        this.firstElementChild.src = "../images/dark.svg";
    }
    document.body.classList.toggle("dark");
});
// light dark end

// owl start
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 0,
        center: true,
        loop: true,
        items: 1,
        nav: true,
        navText: [
            '<img src="images/prev.svg"/>',
            '<img src="images/next.svg"/>',
        ],
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            800: {
                items: 2,
            },
            1150: {
                items: 3,
            },
        },
    });
});
// owl end

// navbar shrink end

// toggle start
function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);
// toggle end
// backtop start

// backtop end

// aos start
AOS.init();
// aos end
//loading start//
// loading start

const tabs = document.querySelectorAll(".ap-tab-link");
const tabs_content = document.querySelectorAll(".ap-tab-content");

function getActiveTab(i) {
    tabs.forEach((tab) => {
        tab.classList.remove("active-tab");
    });
    tabs_content.forEach((tabContent) => {
        tabContent.classList.remove("active-tab");
        tabContent.style.display = "flex";
    });

    const selectedTab = tabs[i];
    const selectedTabContent = tabs_content[i];

    selectedTab.classList.add("active-tab");
    selectedTabContent.classList.add("active-tab");
    selectedTabContent.style.display = "block";
}

getActiveTab(0);

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function (e) {
        e.preventDefault();
        getActiveTab(i);
    });
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();

//navbar-shrink//
window.addEventListener("scroll", function () {
    shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
    if (scrollY > 100) {
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
}
