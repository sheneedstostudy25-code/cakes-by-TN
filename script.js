// ================= MOBILE MENU =================

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


// Close mobile menu when clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navMenu")
            .classList.remove("active");

    });

});


// ================= ORDER MODAL =================

function openOrder() {

    document.getElementById("orderModal")
        .classList.add("active");

}


function closeOrder() {

    document.getElementById("orderModal")
        .classList.remove("active");

}


// Close modal when clicking outside

document.getElementById("orderModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeOrder();

        }

    });


// ================= SELECT CAKE =================

function selectCake(cakeName) {

    openOrder();

    setTimeout(() => {

        document.getElementById("cakeSelect").value = cakeName;

    }, 100);

}


// ================= FORM =================

function submitOrder(event) {

    event.preventDefault();

    alert(
        "🍰 Thank you! Your cake request has been received. " +
        "We'll get back to you shortly!"
    );

    event.target.reset();

    closeOrder();

}


// ================= MENU MESSAGE =================

function showMessage() {

    alert(
        "🍓 Full cake menu coming soon! " +
        "For now, send us a custom order."
    );

}


// ================= SCROLL ANIMATION =================

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


document.querySelectorAll(
    ".cake-card, .review, .about-content, .about-image"
).forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});
