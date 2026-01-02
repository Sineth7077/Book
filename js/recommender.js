document.addEventListener("DOMContentLoaded", () => {

  const genreSelect = document.getElementById("genreSelect");
  const lengthSelect = document.getElementById("lengthSelect");

  const resultBox = document.getElementById("resultBox");

  const titleEl = document.getElementById("bookTitle");
  const authorEl = document.getElementById("bookAuthor");
  const genreEl = document.getElementById("bookGenre");
  const lengthEl = document.getElementById("bookLength");

  const recommendBtn = document.getElementById("recommendBtn");
  const pickAgainBtn = document.getElementById("pickAgainBtn");
  const saveBtn = document.getElementById("saveBtn");

  const readingListDisplay = document.getElementById("readingListDisplay");

  let currentBook = null;

  function recommendBook() {

    let filtered = books.filter(book => {

      let okGenre = (genreSelect.value === "any" || book.genre === genreSelect.value);

      let okLength = true;
      if (lengthSelect.value === "short") okLength = book.pages < 200;
      else if (lengthSelect.value === "medium") okLength = book.pages >= 200 && book.pages <= 400;
      else if (lengthSelect.value === "long") okLength = book.pages > 400;

      return okGenre && okLength;
    });

    if (filtered.length === 0) {
      titleEl.innerText = "No matching books found 😢";
      authorEl.innerText = "";
      genreEl.innerText = "";
      lengthEl.innerText = "";
      return;
    }

    currentBook = filtered[Math.floor(Math.random() * filtered.length)];

    titleEl.innerText = currentBook.title;
    authorEl.innerText = "By " + currentBook.author;
    genreEl.innerText = "Genre: " + currentBook.genre;
    lengthEl.innerText = "Pages: " + currentBook.pages;

    resultBox.classList.add("pop");
    setTimeout(() => resultBox.classList.remove("pop"), 300);
  }

  function saveBook() {
    if (!currentBook) return;

    let list = JSON.parse(localStorage.getItem("readingList")) || [];

    if (!list.some(b => b.title === currentBook.title)) {
      list.push(currentBook);
    }

    localStorage.setItem("readingList", JSON.stringify(list));
    loadReadingList();
  }

  function loadReadingList() {
    let list = JSON.parse(localStorage.getItem("readingList")) || [];
    readingListDisplay.innerHTML = "";

    list.forEach(book => {
      let li = document.createElement("li");
      li.textContent = book.title + " — " + book.author;
      readingListDisplay.appendChild(li);
    });
  }

  recommendBtn.onclick = recommendBook;
  pickAgainBtn.onclick = recommendBook;
  saveBtn.onclick = saveBook;

  loadReadingList();
});
