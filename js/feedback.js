// ========= FEEDBACK FORM SUBMISSION =========

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("feedbackForm");
  const success = document.getElementById("successMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // field validation
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    // email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // retrieve existing feedback
    const feedbackList =
      JSON.parse(localStorage.getItem("feedbackList")) || [];

    // add new feedback
    feedbackList.push({
      name,
      email,
      message,
      date: new Date().toLocaleString()
    });

    // save back to localStorage
    localStorage.setItem("feedbackList", JSON.stringify(feedbackList));

    // confirmation message
    success.textContent = "✅ Thank you! Your feedback has been submitted.";

    // clear form
    form.reset();
  });

  // ========= FAQ ACCORDION =========
  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    item.addEventListener("click", () => {
      const answer = item.querySelector(".faq-answer");

      // toggle open/close
      answer.style.display =
        answer.style.display === "block" ? "none" : "block";
    });
  });

});
