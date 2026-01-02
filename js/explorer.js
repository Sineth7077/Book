// REFERENCES
const bookGrid = document.getElementById("bookGrid");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const authorFilter = document.getElementById("authorFilter");

// Modal elements
const modal = document.getElementById("bookModal");
const closeModal = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");
const modalAuthor = document.getElementById("modalAuthor");
const modalSynopsis = document.getElementById("modalSynopsis");
const modalSeriesList = document.getElementById("modalSeriesList");
const reviewsTableBody = document.querySelector("#reviewsTable tbody");


//-------------------------------//
//     DISPLAY BOOK CARDS        //
//-------------------------------//

function displayBooks(bookArray) {
  bookGrid.innerHTML = "";

  bookArray.forEach(book => {

    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <button class="viewBtn">View Details</button>
    `;

    // Open modal when clicked
    card.querySelector(".viewBtn").addEventListener("click", () => openModal(book));

    bookGrid.appendChild(card);
  });
}


//--------------------------------//
//     POPULATE AUTHOR FILTER      //
//--------------------------------//

function populateAuthors() {
  const authors = [...new Set(books.map(book => book.author))];

  authors.forEach(author => {
    const option = document.createElement("option");
    option.value = author;
    option.textContent = author;
    authorFilter.appendChild(option);
  });
}


//-------------------------------//
//           FILTER LOGIC        //
//-------------------------------//

function filterBooks() {
  const text = searchInput.value.toLowerCase();
  const genre = genreFilter.value;
  const author = authorFilter.value;

  const filtered = books.filter(book => {

    const matchesText =
      book.title.toLowerCase().includes(text) ||
      book.author.toLowerCase().includes(text);

    const matchesGenre =
      genre === "all" || book.genre === genre;

    const matchesAuthor =
      author === "all" || book.author === author;

    return matchesText && matchesGenre && matchesAuthor;
  });

  displayBooks(filtered);
}


// EVENT LISTENERS
searchInput.addEventListener("input", filterBooks);
genreFilter.addEventListener("change", filterBooks);
authorFilter.addEventListener("change", filterBooks);


//-------------------------------//
//           MODAL LOGIC         //
//-------------------------------//

function openModal(book) {

  modalTitle.textContent = book.title;
  modalAuthor.textContent = "By " + book.author;
  modalSynopsis.textContent = book.synopsis;

  // series list
  modalSeriesList.innerHTML = "";
  if (book.series.length === 0) {
    modalSeriesList.innerHTML = "<li>No sequels or prequels.</li>";
  } else {
    book.series.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      modalSeriesList.appendChild(li);
    });
  }

  // reviews table
  reviewsTableBody.innerHTML = "";
  book.reviews.forEach(r => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${r.reviewer}</td>
      <td>${r.rating}</td>
      <td>${r.comment}</td>
    `;
    reviewsTableBody.appendChild(row);
  });

  modal.style.display = "block";
}


// Close modal
document.getElementById("closeModal").addEventListener("click", () => {
  modal.style.display = "none";
});

// close clicking outside
window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


//-------------------------------//
//        INITIAL LOAD           //
//-------------------------------//

populateAuthors();
displayBooks(books);
