/* ================= AUTO-ROTATING QUOTES ================= */

const quotes = [
  "A reader lives a thousand lives before he dies.",
  "Books are a uniquely portable magic.",
  "Reading is dreaming with open eyes.",
  "So many books, so little time.",
  "A room without books is like a body without a soul."
];

let quoteIndex = 0;
const quoteElement = document.getElementById("quote");

function rotateQuotes() {
  quoteElement.textContent = `"${quotes[quoteIndex]}"`;
  quoteIndex = (quoteIndex + 1) % quotes.length;
}

// Change quote every 3 seconds
setInterval(rotateQuotes, 3000);

/* ================= HAMBURGER MENU ================= */

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

/* ================= AUTHOR OF THE DAY ================= */

const authors = [
  "George Orwell",
  "Jane Austen",
  "J.K. Rowling",
  "J.R.R. Tolkien",
  "Agatha Christie",
  "Haruki Murakami"
];

const today = new Date().getDate();   // Day of the month (1–31)
const authorOfTheDay = authors[today % authors.length];

document.getElementById("authorName").textContent = authorOfTheDay;

/* ================= NEWSLETTER (localStorage) ================= */

function subscribe() {
  const emailInput = document.getElementById("newsletterEmail");
  const email = emailInput.value.trim();

  if (email === "") {
    alert("Please enter a valid email address.");
    return;
  }
  
  if (localStorage.getItem("readifyNewsletterEmail") === email) {
    alert("This email is already subscribed.");
    return;
    }

  // Save email to localStorage
  localStorage.setItem("readifyNewsletterEmail", email);

  alert("Thank you for subscribing!");
  emailInput.value = "";
}

/* ================= OPTIONAL: DEBUG CONFIRMATION ================= */
console.log("Readify Home Page JavaScript loaded successfully");
