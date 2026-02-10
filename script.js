/* 🎂 SET BIRTHDAY DATE (Year, Month-1, Day) */
const birthdayDate = new Date(2026, 2, 25); // Example: Feb 20, 2026

// Countdown
function updateCountdown() {
    const now = new Date();
    const diff = birthdayDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML =
            "🎉 It’s Your Birthday Today! 🎂";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("countdown").innerHTML =
        `⏳ ${days} Days ${hours} Hours ${minutes} Minutes`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Slideshow
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 3000);

// Confetti
function startConfetti() {
    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.innerHTML = "🎉";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }
}

// Button Action
function showSurprise() {
    document.getElementById("message").classList.remove("hidden");
    startConfetti();
}
