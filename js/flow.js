// ------ COZY SOUND PLAYER ------

let currentSound = null;

function playSound(type) {
  stopSound();

  if (type === "rain") currentSound = document.getElementById("rainSound");
  if (type === "fire") currentSound = document.getElementById("fireSound");
  if (type === "piano") currentSound = document.getElementById("pianoSound");

  // safety check
  if (!currentSound) return;

  currentSound.volume = 0.4;

  // play after user interaction (button click is OK)
  currentSound.play().catch(() => {
    alert("Audio could not be played. Check file path or browser permissions.");
  });
}

function stopSound() {
  const sounds = ["rainSound", "fireSound", "pianoSound"];

  sounds.forEach(id => {
    const s = document.getElementById(id);
    if (!s) return;
    s.pause();
    s.currentTime = 0;
  });
}


// ------ COMPLETED BOOKS TRACKER ------

function addCompleted() {
  const input = document.getElementById("completedInput");
  let value = input.value.trim();

  if (value === "") {
    alert("Enter a book name first.");
    return;
  }

  let list = JSON.parse(localStorage.getItem("completedBooks")) || [];

  list.push(value);

  localStorage.setItem("completedBooks", JSON.stringify(list));

  input.value = "";
  loadCompleted();
}

function loadCompleted() {
  let list = JSON.parse(localStorage.getItem("completedBooks")) || [];
  const ul = document.getElementById("completedList");

  ul.innerHTML = "";

  list.forEach(book => {
    let li = document.createElement("li");
    li.textContent = book;
    ul.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", loadCompleted);
