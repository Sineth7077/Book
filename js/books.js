// BOOK DATA STORAGE FOR BOOK EXPLORER PAGE

const books = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    image: "pic/img01.webp",
    synopsis: "A young boy discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry, where he uncovers the secret of the Philosopher's Stone.",
    series: ["Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban"],
    reviews: [
      { reviewer: "Emma", rating: "5/5", comment: "Magical and unforgettable!" },
      { reviewer: "Liam", rating: "4/5", comment: "Great start to a legendary series." }
    ]
  },

  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    image: "pic/img02.webp",
    synopsis: "Bilbo Baggins is swept into an epic quest to reclaim the lost Dwarf Kingdom of Erebor from the dragon Smaug.",
    series: ["The Fellowship of the Ring"],
    reviews: [
      { reviewer: "Oliver", rating: "5/5", comment: "A timeless adventure." },
      { reviewer: "Sophia", rating: "4/5", comment: "Loved the world-building." }
    ]
  },

  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    genre: "Science Fiction",
    image: "pic/img03.webp",
    synopsis: "A dystopian novel depicting a totalitarian regime that practices extreme surveillance and control over its citizens.",
    series: [],
    reviews: [
      { reviewer: "Noah", rating: "5/5", comment: "Powerful and disturbing." },
      { reviewer: "Ava", rating: "5/5", comment: "Still relevant today." }
    ]
  },

  {
    id: 4,
    title: "The Fault in Our Stars",
    author: "John Green",
    genre: "Romance",
    image: "pic/img04.webp",
    synopsis: "Two teenagers with cancer fall in love and experience the highs and lows of love and loss.",
    series: [],
    reviews: [
      { reviewer: "Mia", rating: "5/5", comment: "Beautiful and heartbreaking." },
      { reviewer: "Ethan", rating: "4/5", comment: "Emotional read." }
    ]
  },

  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    image: "pic/img05.webp",
    synopsis: "Elizabeth Bennet navigates love, manners, and morality in 19th century England while dealing with the mysterious Mr. Darcy.",
    series: [],
    reviews: [
      { reviewer: "Grace", rating: "5/5", comment: "Classic romance masterpiece." },
      { reviewer: "Lucas", rating: "4/5", comment: "Brilliant characters." }
    ]
  },

  {
    id: 6,
    title: "Sherlock Holmes: The Hound of the Baskervilles",
    author: "Arthur Conan Doyle",
    genre: "Mystery",
    image: "pic/img06.webp",
    synopsis: "Sherlock Holmes investigates the legend of a supernatural hound haunting the Baskerville family.",
    series: ["The Sign of Four", "A Study in Scarlet"],
    reviews: [
      { reviewer: "Henry", rating: "5/5", comment: "Chilling mystery!" },
      { reviewer: "Isabella", rating: "4/5", comment: "Holmes at his best." }
    ]
  },

  {
    id: 7,
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    image: "pic/img07.webp",
    synopsis: "Paul Atreides becomes embroiled in political intrigue and prophecy on the desert planet Arrakis, the only source of the spice melange.",
    series: ["Dune Messiah", "Children of Dune"],
    reviews: [
      { reviewer: "James", rating: "5/5", comment: "Epic sci-fi world." },
      { reviewer: "Amelia", rating: "4/5", comment: "Deep but rewarding." }
    ]
  },

  {
    id: 8,
    title: "The Martian",
    author: "Andy Weir",
    genre: "Science Fiction",
    image: "pic/img08.webp",
    synopsis: "Astronaut Mark Watney is stranded on Mars and must rely on science and determination to survive.",
    series: [],
    reviews: [
      { reviewer: "Daniel", rating: "5/5", comment: "Funny and intense." },
      { reviewer: "Ella", rating: "5/5", comment: "Science done right." }
    ]
  },

  {
    id: 9,
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Non-Fiction",
    image: "pic/img09.webp",
    synopsis: "Michelle Obama shares the experiences that shaped her life, from childhood to First Lady of the United States.",
    series: [],
    reviews: [
      { reviewer: "Harper", rating: "5/5", comment: "Inspiring story." },
      { reviewer: "Jack", rating: "4/5", comment: "Very moving." }
    ]
  },

  {
    id: 10,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Non-Fiction",
    image: "pic/img10.webp",
    synopsis: "A practical guide to building good habits and breaking bad ones through small, incremental changes.",
    series: [],
    reviews: [
      { reviewer: "Benjamin", rating: "5/5", comment: "Life-changing tips." },
      { reviewer: "Chloe", rating: "4/5", comment: "Very practical." }
    ]
  }
];
