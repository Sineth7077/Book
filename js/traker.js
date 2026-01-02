


// CALCULATE READING PROGRESS
function calculateProgress() {

  const total = parseInt(document.getElementById("totalPages").value);
  const read = parseInt(document.getElementById("pagesRead").value);
  const speed = parseInt(document.getElementById("readingSpeed").value);

  if (total <= 0 || read < 0 || speed <= 0 || read > total) {
    alert("Please enter valid values.");
    return;
  }

  const percent = Math.round((read / total) * 100);
  const remainingPages = total - read;
  const estimateDays = Math.ceil(remainingPages / speed);

  document.getElementById("percentComplete").innerText = `Completed: ${percent}%`;
  document.getElementById("finishEstimate").innerText = `Estimated Days to Finish: ${estimateDays}`;

  document.getElementById("progressFill").style.width = percent + "%";
}

// SAVE TO LOCALSTORAGE
function saveProgress() {

  const data = {
    total: document.getElementById("totalPages").value,
    read: document.getElementById("pagesRead").value,
    speed: document.getElementById("readingSpeed").value
  };

  localStorage.setItem("readingProgress", JSON.stringify(data));
  alert("Progress saved successfully 📚");
}


