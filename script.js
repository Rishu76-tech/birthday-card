function openCard() {
    document.getElementById("qrScreen").classList.add("hidden");
    document.getElementById("cardScreen").classList.remove("hidden");
}

function showSurprise() {
    document.getElementById("surprise").classList.remove("hidden");
    startConfetti();
}

/* STEP 7 – CONFETTI EFFECT 🎉 */
function startConfetti() {
    for (let i = 0; i < 30; i++) {
        let confetti = document.createElement("div");
        confetti.innerHTML = "🎉";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = "24px";
        confetti.style.animation = "fall 3s linear";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}
