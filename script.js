const quoteDisplay =
document.getElementById("quote");
const newQuoteBtn =
document.getElementById("new-quote");
const timeDisplay =
document.getElementById("time");
const themeToggle =
document.getElementById("theme-toggle");

const quotes = [
    "Doubt kills more dreams than failure ever will.",
    "You are stronger than you think.",
    "Your potential is endless.",
    "Believe you can and you're halfway there.",
    "The best way out is always through.",
    "It always seems impossible until it's done.",
    "Do what you can, with what you have, where you are."
];

function updateTime() {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleString();
}

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
    document.body.style.background = "url('https://source.unsplash.com/1600x900/?nature,landscape')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}

newQuoteBtn.addEventListener("click", newQuote);
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");});

    setInterval(updateTime, 1000);
    updateTime();
    newQuote();