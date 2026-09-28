/**
 * Kindle Book Information Portal
 * Interactive Library & Right-Side Slide-In Details Controller
 */

// Comprehensive Book Repository with Kindle Metadata and Chapter Excerpts
const booksData = [
  {
    id: "clean-code",
    title: "Clean Code",
    subtitle: "A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin (Uncle Bob)",
    category: "tech",
    categoryLabel: "Tech & Software",
    rating: 4.8,
    reviewsCount: "14,890",
    coverGradient: "linear-gradient(135deg, #1e3a8a, #0f172a)",
    coverAccent: "#60a5fa",
    pages: 464,
    readTime: "8h 15m",
    published: "August 1, 2008",
    publisher: "Prentice Hall",
    isbn: "978-0132350884",
    language: "English",
    progress: 72,
    badge: "Bestseller",
    description: `Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way.<br><br>Noted software expert Robert C. Martin presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship. Martin has teamed up with his colleagues from Object Mentor to distill their best agile practice of cleaning code "on the fly" into a book that will instill within you the values of a software craftsman and make you a better programmer.`,
    highlights: [
      "Learn the distinctive difference between good code and bad code with real-world refactorings.",
      "How to write good names, good functions, good objects, and good classes.",
      "How to implement complete error handling without obscuring code logic.",
      "Unit testing best practices and the three laws of Test-Driven Development (TDD)."
    ],
    chapters: [
      { num: "01", title: "Clean Code: Philosophy & Boy Scout Rule", time: "25 min" },
      { num: "02", title: "Meaningful Names: Intent & Pronounceability", time: "35 min" },
      { num: "03", title: "Functions: Do One Thing and Do It Well", time: "45 min" },
      { num: "04", title: "Comments: Good, Bad, and Necessary Evils", time: "30 min" },
      { num: "05", title: "Formatting: Vertical & Horizontal Densities", time: "28 min" },
      { num: "06", title: "Error Handling: Clean Exceptions vs Nulls", time: "40 min" }
    ],
    sampleExcerpt: {
      chapter: "Chapter 1: Clean Code",
      text: `You are reading this book for two reasons: First, you are a programmer. Second, you want to be a better programmer. Good. We need better programmers.<br><br>This is a book about good programming. It is filled with code. We are going to look at code from every perspective. We will look at good code and bad code. We will see code that is clean and code that is foul. And more importantly, we will see how to clean bad code into good code.<br><br>The Boy Scout Rule states: "Leave the campground cleaner than you found it." If we all checked in our code a little cleaner than when we checked it out, the code simply could not rot. The cleanup doesn't have to be something big. Change one variable name for the better, break up one function that's a little too large, eliminate one little bit of duplication. That is craftsmanship.`
    },
    reviews: [
      { name: "Alex Chen (Staff Engineer)", verified: true, quote: "This book completely transformed how I think about refactoring and code clarity. Every junior and senior engineer should read it." },
      { name: "Sarah Jenkins (Lead Architect)", verified: true, quote: "The Boy Scout Rule alone saved our engineering team dozens of technical debt hours." }
    ]
  },
  {
    id: "pragmatic-programmer",
    title: "The Pragmatic Programmer",
    subtitle: "Your Journey to Mastery (20th Anniversary Edition)",
    author: "David Thomas & Andrew Hunt",
    category: "tech",
    categoryLabel: "Tech & Software",
    rating: 4.9,
    reviewsCount: "19,430",
    coverGradient: "linear-gradient(135deg, #7c2d12, #1c1917)",
    coverAccent: "#fb923c",
    pages: 352,
    readTime: "6h 40m",
    published: "September 13, 2019",
    publisher: "Addison-Wesley",
    isbn: "978-0135957059",
    language: "English",
    progress: 45,
    badge: "Essential",
    description: `The Pragmatic Programmer is one of those rare tech audiobooks/books you will read, re-read, and read again over the years. Whether you're new to the field or an experienced practitioner, you'll come away with fresh insights each time.<br><br>Dave Thomas and Andy Hunt wrote the first edition of this influential book in 1999 to help their clients create better software and rediscover the joy of coding. These lessons have helped a generation of programmers examine the very essence of software development, independent of any particular language, framework, or methodology.`,
    highlights: [
      "Fight software rot and avoid broken window syndrome in codebases.",
      "Continuous learning and constructing your Knowledge Portfolio.",
      "The Orthogonality principle and DRY (Don't Repeat Yourself).",
      "Building flexible, decoupled architectures and automating repetitive chores."
    ],
    chapters: [
      { num: "01", title: "A Pragmatic Philosophy: Care About Your Craft", time: "30 min" },
      { num: "02", title: "A Pragmatic Approach: The Evils of Duplication", time: "40 min" },
      { num: "03", title: "The Basic Tools: Plain Text & Power Editing", time: "35 min" },
      { num: "04", title: "Pragmatic Paranoia: Design by Contract", time: "50 min" },
      { num: "05", title: "Bend, or Break: Decoupling & Juggling", time: "45 min" }
    ],
    sampleExcerpt: {
      chapter: "Chapter 1: A Pragmatic Philosophy",
      text: `What distinguishes a pragmatic programmer? We feel it's an attitude, a style, a philosophy of approaching problems and their solutions. They think beyond the immediate problem, always seeking to place it in its larger context.<br><br>Don't Leave Broken Windows. One broken window, left unrepaired for any substantial length of time, instills in the inhabitants of the building a sense of abandonment—a sense that the authorities don't care. Soon, more windows are broken. Don't leave 'broken windows' (bad designs, wrong decisions, or poor code) unrepaired. Fix each one as soon as it is discovered.`
    },
    reviews: [
      { name: "Michael Chang (CTO)", verified: true, quote: "Timeless wisdom. The 20th Anniversary edition modernized the examples while preserving the bedrock philosophies of programming." },
      { name: "Dr. Elena Rostova", verified: true, quote: "Required reading for all my graduate students. It instills true professional responsibility." }
    ]
  },
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    subtitle: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: "James Clear",
    category: "mind",
    categoryLabel: "Mind & Productivity",
    rating: 4.9,
    reviewsCount: "115,200",
    coverGradient: "linear-gradient(135deg, #b45309, #451a03)",
    coverAccent: "#fde047",
    pages: 320,
    readTime: "5h 30m",
    published: "October 16, 2018",
    publisher: "Avery",
    isbn: "978-0735211292",
    language: "English",
    progress: 90,
    badge: "#1 NYT Bestseller",
    description: `No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.<br><br>If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change.`,
    highlights: [
      "The Aggregation of Marginal Gains: How 1% improvements compound exponentially.",
      "The 4 Laws of Behavior Change: Make it Obvious, Attractive, Easy, and Satisfying.",
      "Identity-Based Habits: Changing who you believe you are, not just outcomes.",
      "Environment Design: Structuring your surroundings for effortless habit triggers."
    ],
    chapters: [
      { num: "01", title: "The Surprising Power of Atomic Habits", time: "25 min" },
      { num: "02", title: "How Habits Shape Identity (and Vice Versa)", time: "30 min" },
      { num: "03", title: "The 1st Law: Make It Obvious", time: "45 min" },
      { num: "04", title: "The 2nd Law: Make It Attractive", time: "40 min" },
      { num: "05", title: "The 3rd Law: Make It Easy", time: "50 min" },
      { num: "06", title: "The 4th Law: Make It Satisfying", time: "35 min" }
    ],
    sampleExcerpt: {
      chapter: "Chapter 1: The Surprising Power of Atomic Habits",
      text: `It is so easy to overestimate the importance of one defining moment and underestimate the value of making small improvements on a daily basis. Too often, we convince ourselves that massive success requires massive action.<br><br>Meanwhile, improving by 1 percent isn't particularly notable—sometimes it isn't even noticeable—but it can be far more meaningful, especially in the long run. If you can get 1 percent better each day for one year, you'll end up thirty-seven times better by the time you're done.`
    },
    reviews: [
      { name: "Mark Manson (Author)", verified: true, quote: "A supremely practical and useful book. James Clear distills the most fundamental information about habit formation into actionable steps." },
      { name: "Rachel Vance", verified: true, quote: "Changed my morning routine and workout habits forever. Simply genius." }
    ]
  },
  {
    id: "dune",
    title: "Dune",
    subtitle: "The Masterpiece Sci-Fi Epic (Book 1)",
    author: "Frank Herbert",
    category: "scifi",
    categoryLabel: "Sci-Fi & Fantasy",
    rating: 4.7,
    reviewsCount: "82,410",
    coverGradient: "linear-gradient(135deg, #c2410c, #78350f)",
    coverAccent: "#fdba74",
    pages: 688,
    readTime: "12h 45m",
    published: "August 1, 1965",
    publisher: "Chilton Books",
    isbn: "978-0441172719",
    language: "English",
    progress: 15,
    badge: "Hugo & Nebula Award",
    description: `Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the "spice" melange, a drug capable of extending life and enhancing consciousness.<br><br>Coveted across the known universe, melange is a prize worth killing for. When House Atreides is betrayed, the destruction of Paul's family will set the boy on a journey toward a destiny greater than he could ever have imagined.`,
    highlights: [
      "Epic world-building spanning planetary ecology, political intrigue, and religion.",
      "The Litany Against Fear: 'Fear is the mind-killer.'",
      "Exploration of messianic figures and ecological sustainability.",
      "Widely considered the greatest science fiction novel of all time."
    ],
    chapters: [
      { num: "01", title: "The Gom Jabbar & The Reverend Mother", time: "45 min" },
      { num: "02", title: "Departure for Arrakis: Desert Politics", time: "60 min" },
      { num: "03", title: "The Spice Harvester & The Giant Sandworm", time: "55 min" },
      { num: "04", title: "The Betrayal of Dr. Yueh", time: "50 min" },
      { num: "05", title: "Muad'Dib and the Fremen of the Deep Desert", time: "70 min" }
    ],
    sampleExcerpt: {
      chapter: "Book One: Dune",
      text: `"I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me.<br><br>And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain."<br><br>Paul stood in the shadows of Castle Caladan, listening to the murmuring winds outside. The journey to Arrakis was imminent, and the sands of destiny were already shifting.`
    },
    reviews: [
      { name: "Arthur C. Clarke", verified: true, quote: "I know nothing comparable to it except The Lord of the Rings." },
      { name: "David Lynch", verified: true, quote: "A monumental work of political and ecological imagination." }
    ]
  },
  {
    id: "ai-modern-approach",
    title: "Artificial Intelligence",
    subtitle: "A Modern Approach (4th Global Edition)",
    author: "Stuart Russell & Peter Norvig",
    category: "ai",
    categoryLabel: "Science & AI",
    rating: 4.9,
    reviewsCount: "9,820",
    coverGradient: "linear-gradient(135deg, #047857, #064e3b)",
    coverAccent: "#6ee7b7",
    pages: 1152,
    readTime: "24h 00m",
    published: "April 28, 2020",
    publisher: "Pearson",
    isbn: "978-0134610993",
    language: "English",
    progress: 30,
    badge: "Gold Standard",
    description: `The most comprehensive, up-to-date introduction to the theory and practice of artificial intelligence. Number one in its field, this textbook is ideal for one or two-semester, undergraduate or graduate-level courses in Artificial Intelligence.<br><br>The long-anticipated fourth edition explores the full breadth of the subject, presenting the unified concept of an intelligent agent that senses its environment and acts autonomously to achieve its objectives. Features cutting-edge chapters on deep learning, transformer networks, reinforcement learning, and AI alignment.`,
    highlights: [
      "The unifying Agent Architecture framework: Reflex, Goal, and Utility-based agents.",
      "Comprehensive search: A*, Adversarial Search (Alpha-Beta pruning), Constraint Satisfaction.",
      "Probabilistic Reasoning, Bayesian Networks, and Markov Decision Processes (MDP).",
      "Deep Learning, Natural Language Processing, Computer Vision, and AI Safety."
    ],
    chapters: [
      { num: "01", title: "Introduction: What Is Artificial Intelligence?", time: "40 min" },
      { num: "02", title: "Intelligent Agents & PEAS Environments", time: "50 min" },
      { num: "03", title: "Solving Problems by Searching (A* & Heuristics)", time: "65 min" },
      { num: "04", title: "Knowledge Representation & First-Order Logic", time: "60 min" },
      { num: "05", title: "Probabilistic Reasoning & Bayesian Networks", time: "70 min" },
      { num: "06", title: "Deep Learning Architectures & Transformer Models", time: "80 min" }
    ],
    sampleExcerpt: {
      chapter: "Chapter 1: What is AI?",
      text: `For thousands of years, we have tried to understand how we think: that is, how a mere handful of matter can perceive, understand, predict, and manipulate a world far larger and more complicated than itself. The field of artificial intelligence, or AI, goes further still: it attempts not just to understand but also to build intelligent entities.<br><br>We define AI as the study of agents that receive percepts from the environment and perform actions. Each such agent implements a function that maps percept sequences to actions. Our aim is to design agents that are rational—meaning they act so as to achieve the best outcome.`
    },
    reviews: [
      { name: "Prof. Andrew Ng", verified: true, quote: "The definitive AI bible. Norvig and Russell created a masterpiece that will train the next generations of researchers." },
      { name: "Demis Hassabis (DeepMind)", verified: true, quote: "An indispensable guide for anyone serious about understanding the foundations of intelligent systems." }
    ]
  },
  {
    id: "ddia",
    title: "Designing Data-Intensive Applications",
    subtitle: "The Big Ideas Behind Reliable, Scalable, and Maintainable Systems",
    author: "Martin Kleppmann",
    category: "tech",
    categoryLabel: "Tech & Software",
    rating: 4.9,
    reviewsCount: "22,150",
    coverGradient: "linear-gradient(135deg, #4338ca, #1e1b4b)",
    coverAccent: "#a5b4fc",
    pages: 616,
    readTime: "11h 20m",
    published: "March 16, 2017",
    publisher: "O'Reilly Media",
    isbn: "978-1449373320",
    language: "English",
    progress: 80,
    badge: "Must Read",
    description: `Data is at the center of many challenges in system design today. Difficult issues need to be figured out, such as scalability, consistency, reliability, efficiency, and maintainability. In addition, we have an overwhelming variety of tools, including relational databases, NoSQL datastores, stream or batch processors, and message brokers.<br><br>Author Martin Kleppmann helps you navigate this diverse landscape by examining the pros and cons of various technologies for processing and storing data. Software keeps changing, but the fundamental principles remain the same.`,
    highlights: [
      "Reliability, Scalability, and Maintainability: Concrete metrics and trade-offs.",
      "Storage engines: LSM-Trees vs B-Trees, SSTables, and indexing structures.",
      "Replication strategies: Single-leader, multi-leader, leaderless (Dynamo style).",
      "Transactions, ACID semantics, serializability, and distributed consensus (Raft/Paxos)."
    ],
    chapters: [
      { num: "01", title: "Reliable, Scalable, and Maintainable Applications", time: "40 min" },
      { num: "02", title: "Data Models and Query Languages: Relational vs Graph", time: "50 min" },
      { num: "03", title: "Storage and Retrieval: Hash Indexes, B-Trees & LSM-Trees", time: "60 min" },
      { num: "04", title: "Encoding and Evolution: Protocol Buffers & Avro", time: "45 min" },
      { num: "05", title: "Replication: Leader Failover & Replication Lag", time: "65 min" },
      { num: "06", title: "Partitioning: Key-Range vs Hash Partitioning", time: "55 min" }
    ],
    sampleExcerpt: {
      chapter: "Chapter 1: Reliable, Scalable, Maintainable",
      text: `Today, many applications are data-intensive, as opposed to compute-intensive. Raw CPU power is rarely a limiting factor for these applications—bigger problems are usually the amount of data, the complexity of data, and the speed at which it is changing.<br><br>We typically want three things from a data system: Reliability (continuing to work correctly even when things go wrong), Scalability (reasonable ways of coping with growth in data volume or traffic), and Maintainability (people being able to work on the system productively).`
    },
    reviews: [
      { name: "Kelsey Hightower", verified: true, quote: "Every backend and distributed systems engineer should treat this book as gospel." },
      { name: "Gwen Shapira", verified: true, quote: "The clearest explanation of distributed consensus, transactions, and replication ever written." }
    ]
  },
  {
    id: "thinking-fast-slow",
    title: "Thinking, Fast and Slow",
    subtitle: "The Groundbreaking Exploration of Human Judgment & Bias",
    author: "Daniel Kahneman (Nobel Laureate)",
    category: "mind",
    categoryLabel: "Mind & Productivity",
    rating: 4.6,
    reviewsCount: "67,400",
    coverGradient: "linear-gradient(135deg, #0e7490, #164e63)",
    coverAccent: "#67e8f9",
    pages: 512,
    readTime: "9h 30m",
    published: "October 25, 2011",
    publisher: "Farrar, Straus and Giroux",
    isbn: "978-0374533557",
    language: "English",
    progress: 50,
    badge: "Nobel Prize Winner",
    description: `In the international bestseller, Thinking, Fast and Slow, Daniel Kahneman, the renowned psychologist and winner of the Nobel Prize in Economics, takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think.<br><br>System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. The impact of overconfidence on corporate strategies, the difficulties of predicting what will make us happy in the future, the profound effect of cognitive biases on everything from playing the stock market to planning our next vacation—each of these can be understood only by knowing how the two systems shape our judgments.`,
    highlights: [
      "System 1 (fast, effortless, pattern-matching) vs System 2 (slow, effortful, analytical).",
      "Heuristics and Biases: Anchoring, Availability heuristic, Representativeness.",
      "Prospect Theory: Why humans feel loss roughly twice as intensely as equivalent gain.",
      "The Experiencing Self versus the Remembering Self."
    ],
    chapters: [
      { num: "01", title: "Two Systems: Fast Intuition vs Slow Reason", time: "35 min" },
      { num: "02", title: "Attention and Effort: Pupillary Dilation and System 2", time: "40 min" },
      { num: "03", title: "The Lazy Controller: Ego Depletion", time: "30 min" },
      { num: "04", title: "The Associative Machine: Priming Effects", time: "45 min" },
      { num: "05", title: "Cognitive Ease: Truth Illusions and Familiarity", time: "40 min" }
    ],
    sampleExcerpt: {
      chapter: "Part 1: Two Systems",
      text: `To observe your mind in automatic mode, glance at the image below. Your experience as you looked at the woman's face combined seamlessly what we normally call seeing and intuitive thinking. As surely and quickly as you saw that the young woman's hair is dark, you knew she is angry.<br><br>This is an example of fast thinking: System 1 operates automatically and quickly, with little or no effort and no sense of voluntary control. In contrast, consider the problem 17 × 24. You experienced slow thinking: System 2 allocates attention to the effortful mental operations that demand it.`
    },
    reviews: [
      { name: "Nassim Nicholas Taleb", verified: true, quote: "A monumental achievement in behavioral science. Upended modern economics." },
      { name: "The New York Times", verified: true, quote: "A masterpiece of intellectual clarity and revolutionary behavioral insight." }
    ]
  },
  {
    id: "project-hail-mary",
    title: "Project Hail Mary",
    subtitle: "A Lone Astronaut. An Impossible Interstellar Mission.",
    author: "Andy Weir",
    category: "scifi",
    categoryLabel: "Sci-Fi & Fantasy",
    rating: 4.9,
    reviewsCount: "142,300",
    coverGradient: "linear-gradient(135deg, #831843, #500724)",
    coverAccent: "#f472b6",
    pages: 496,
    readTime: "8h 50m",
    published: "May 4, 2021",
    publisher: "Ballantine Books",
    isbn: "978-0593135204",
    language: "English",
    progress: 100,
    badge: "Audible Book of the Year",
    description: `Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself are doomed. Except right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it.<br><br>All he knows is that he's been asleep for a very, very long time. And he's just been awakened to find himself millions of miles from home, with nothing but two corpses for company. Stepping into the scientific unknown, Ryland must solve an extinction-level mystery with science, humor, and an unexpected alien friend.`,
    highlights: [
      "Rigorous hard science blended with laugh-out-loud humor and human ingenuity.",
      "The mystery of the Astrophage: Sun-eating micro-organisms threatening Earth's climate.",
      "One of the most heartwarming first-contact friendships in literary history.",
      "Relativity, xenon fuel engines, orbital mechanics, and xenobiology experiments."
    ],
    chapters: [
      { num: "01", title: "Awakening in Deep Space & Amnesia", time: "40 min" },
      { num: "02", title: "Remembering Earth: The Petrova Line", time: "50 min" },
      { num: "03", title: "Meet the Astrophage: Breeding Sun-Eaters", time: "45 min" },
      { num: "04", title: "First Contact with the Alien Vessel 'Blip-A'", time: "60 min" },
      { num: "05", title: "Rocky the Engineer: Translating Musical Chords", time: "70 min" }
    ],
    sampleExcerpt: {
      chapter: "Chapter 1: The Slumber",
      text: `"What's two plus two?"<br><br>That's what the computerized voice asked me. I blinked at the harsh fluorescent lighting. My body felt heavy, like it was covered in lead blankets. Tubes ran out of my arms, and medical monitors beeped in rhythmic serenity.<br><br>"Four," I croaked. My throat was as dry as sandpaper.<br><br>"Incorrect. The answer is 'Four, please.' Just kidding. You have regained consciousness. Do you know your name?"<br><br>I thought about it. Nothing came up. I didn't know who I was, where I was, or why the room around me was humming with the vibrations of massive fusion thrusters.`
    },
    reviews: [
      { name: "George R. R. Martin", verified: true, quote: "Loved The Martian, but loved Project Hail Mary even more! Unputdownable." },
      { name: "Brandon Sanderson", verified: true, quote: "Pure science-fiction joy. Ryland and Rocky's chemistry is unforgettable." }
    ]
  }
];

// Current State
let currentCategory = "all";
let searchQuery = "";
let selectedBookId = null;

// DOM Elements
const booksListContainer = document.getElementById("booksList");
const booksCountEl = document.getElementById("booksCount");
const searchInput = document.getElementById("searchInput");
const filterChips = document.querySelectorAll(".filter-chip");
const detailsEmptyState = document.getElementById("detailsEmptyState");
const bookDetailsContainer = document.getElementById("bookDetailsContainer");

// Reader Modal Elements
const readerModal = document.getElementById("kindleReaderModal");
const readerTitle = document.getElementById("readerTitle");
const readerChapter = document.getElementById("readerChapter");
const readerContent = document.getElementById("readerContent");
const readerProgress = document.getElementById("readerProgress");
const btnCloseReader = document.getElementById("btnCloseReader");

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
  renderBooksList();
  setupEventListeners();

  // If a URL parameter is present, auto-select that book
  const urlParams = new URLSearchParams(window.location.search);
  const bookParam = urlParams.get("book");
  if (bookParam) {
    selectBook(bookParam);
  }
});

// Setup Events
function setupEventListeners() {
  // Search input filter
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderBooksList();
  });

  // Category chip filters
  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      filterChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      currentCategory = chip.dataset.category;
      renderBooksList();
    });
  });

  // Reader Modal Theme Controls
  document.querySelectorAll(".theme-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".theme-pill").forEach(p => p.style.borderColor = "transparent");
      pill.style.borderColor = "var(--accent-amber)";
      
      const theme = pill.dataset.theme;
      const canvas = document.getElementById("readerContent");
      canvas.className = `reader-canvas theme-${theme}`;
    });
  });

  // Close reader
  btnCloseReader.addEventListener("click", closeReader);
  readerModal.addEventListener("click", (e) => {
    if (e.target === readerModal) closeReader();
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && readerModal.classList.contains("active")) {
      closeReader();
    }
  });
}

// Filter and Render Books List (Kindle Left Side)
function renderBooksList() {
  const filtered = booksData.filter((book) => {
    const matchesCategory =
      currentCategory === "all" || book.category === currentCategory;
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery) ||
      book.author.toLowerCase().includes(searchQuery) ||
      book.categoryLabel.toLowerCase().includes(searchQuery) ||
      book.subtitle.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  booksCountEl.textContent = `${filtered.length} books`;

  if (filtered.length === 0) {
    booksListContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 0.5rem; opacity: 0.6;">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <p style="font-weight: 500; font-size: 0.95rem;">No books matched "${searchQuery}"</p>
        <p style="font-size: 0.8rem; margin-top: 0.25rem;">Try adjusting your search terms or filter.</p>
      </div>
    `;
    return;
  }

  booksListContainer.innerHTML = filtered
    .map((book) => {
      const isSelected = book.id === selectedBookId;
      const starsHtml = generateStars(book.rating);

      return `
      <div class="book-card ${isSelected ? "selected" : ""}" 
           id="card-${book.id}"
           onclick="selectBook('${book.id}')">
        
        <!-- 3D Book Cover Thumbnail -->
        <div class="book-thumb-wrapper">
          <div class="book-cover-3d" style="background: ${book.coverGradient}; border: 1px solid ${book.coverAccent}40;">
            <div style="font-size: 0.55rem; color: ${book.coverAccent}; font-weight: 700; text-transform: uppercase;">
              ${book.badge}
            </div>
            <div>
              <div class="thumb-title">${book.title}</div>
              <div class="thumb-author">${book.author.split('(')[0]}</div>
            </div>
          </div>
        </div>

        <!-- Meta Info -->
        <div class="book-meta">
          <div>
            <div class="book-header-line">
              <span class="book-tag">${book.categoryLabel}</span>
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">${book.pages}p</span>
            </div>
            <h3 class="book-title" title="${book.title}">${book.title}</h3>
            <p class="book-author">${book.author}</p>
            
            <div class="book-rating-row">
              <div class="stars-svg">${starsHtml}</div>
              <span class="rating-score">${book.rating}</span>
              <span class="rating-count">(${book.reviewsCount})</span>
            </div>
          </div>

          <!-- Kindle Progress -->
          <div class="kindle-progress-wrapper">
            <div class="progress-info">
              <span>${book.progress}% read</span>
              <span>${book.readTime} left</span>
            </div>
            <div class="progress-bar-track">
              <div class="progress-bar-fill" style="width: ${book.progress}%;"></div>
            </div>
          </div>

          <!-- Bottom Action -->
          <div class="card-bottom-actions">
            <span style="font-size: 0.7rem; color: var(--text-muted);">Kindle Edition</span>
            <button class="btn-details" onclick="event.stopPropagation(); selectBook('${book.id}')">
              <span>Details</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

// Handle Book Selection and Right-Side Slide-In
function selectBook(bookId) {
  selectedBookId = bookId;
  const book = booksData.find((b) => b.id === bookId);
  if (!book) return;

  // Highlight selected card on left side
  document.querySelectorAll(".book-card").forEach((card) => {
    card.classList.remove("selected");
  });
  const activeCard = document.getElementById(`card-${bookId}`);
  if (activeCard) {
    activeCard.classList.add("selected");
  }

  // Hide empty state
  detailsEmptyState.style.display = "none";

  // Re-trigger slide-in animation on right side
  bookDetailsContainer.classList.remove("slide-in");
  void bookDetailsContainer.offsetWidth; // Force CSS reflow
  bookDetailsContainer.classList.add("slide-in");

  // Render Book Details into right container
  renderBookDetails(book);

  // Scroll details panel smoothly to top
  const rightPanel = document.querySelector(".right-details-panel");
  if (rightPanel) {
    rightPanel.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Render Book Details into Right Side
function renderBookDetails(book) {
  const starsHtmlLarge = generateStars(book.rating);

  bookDetailsContainer.innerHTML = `
    <!-- Top Breadcrumb & Mobile Back Action -->
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.82rem; color: var(--text-muted);">
        <span>Kindle Store</span>
        <span>/</span>
        <span>${book.categoryLabel}</span>
        <span>/</span>
        <span style="color: var(--accent-amber); font-weight: 500;">${book.title}</span>
      </div>
      <div style="font-size: 0.78rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.4rem;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        Estimated Read: ${book.readTime}
      </div>
    </div>

    <!-- Hero Showcase Section -->
    <div class="book-hero">
      <!-- 3D Large Display Cover -->
      <div class="display-cover-wrapper">
        <div class="display-cover-3d" style="background: ${book.coverGradient}; border: 1px solid ${book.coverAccent}40;">
          <div class="cover-badge-top">${book.badge}</div>
          <div class="cover-center-content">
            <div class="cover-main-title">${book.title}</div>
            <div class="cover-sub-author">${book.author}</div>
          </div>
          <div style="font-size: 0.7rem; color: rgba(255,255,255,0.7); text-align: right;">
            Kindle Oasis
          </div>
        </div>
      </div>

      <!-- Hero Information Column -->
      <div class="hero-details">
        <div class="hero-tag-row">
          <span class="badge-genre">${book.categoryLabel}</span>
          <span class="badge-kindle-edition">Kindle Edition</span>
          <span style="font-size: 0.75rem; color: var(--accent-green); background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.3); padding: 0.2rem 0.65rem; border-radius: 999px; font-weight: 600;">
            ✓ In Your Library
          </span>
        </div>

        <h1 class="hero-title">${book.title}</h1>
        <p class="hero-subtitle">${book.subtitle}</p>

        <div class="hero-author-line">
          by <strong>${book.author}</strong> (Author)
        </div>

        <!-- Rating Large Block -->
        <div class="hero-rating-block">
          <div class="rating-stars-large">${starsHtmlLarge}</div>
          <span class="rating-score-large">${book.rating}</span>
          <span class="rating-reviews-count">${book.reviewsCount} global ratings</span>
        </div>

        <!-- Call to Action Buttons -->
        <div class="hero-cta-group">
          <button class="btn-kindle-action read-sample" onclick="openReader('${book.id}')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Read Sample Now</span>
          </button>

          <button class="btn-kindle-action secondary" onclick="alert('Added to your Kindle Highlights & Wishlist!')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>Wishlist</span>
          </button>

          <button class="btn-kindle-action secondary" onclick="simulateAudioSample('${book.id}')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
            <span>Audible Sample</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Specifications Grid (Kindle Oasis Spec Bar) -->
    <div class="book-specs-grid">
      <div class="spec-tile">
        <span class="spec-label">Print Length</span>
        <span class="spec-value">${book.pages} pages</span>
      </div>
      <div class="spec-tile">
        <span class="spec-label">Read Time</span>
        <span class="spec-value">${book.readTime}</span>
      </div>
      <div class="spec-tile">
        <span class="spec-label">Language</span>
        <span class="spec-value">${book.language}</span>
      </div>
      <div class="spec-tile">
        <span class="spec-label">Publisher</span>
        <span class="spec-value">${book.publisher}</span>
      </div>
      <div class="spec-tile">
        <span class="spec-label">Publication Date</span>
        <span class="spec-value">${book.published.split(',')[0]}</span>
      </div>
      <div class="spec-tile">
        <span class="spec-label">ISBN-13</span>
        <span class="spec-value" style="font-size: 0.8rem; word-break: break-all;">${book.isbn}</span>
      </div>
    </div>

    <!-- Synopsis Section -->
    <div class="details-section">
      <h2 class="section-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent-amber);">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
        Book Synopsis & Editorial Overview
      </h2>
      <div class="synopsis-text">
        ${book.description}
      </div>
    </div>

    <!-- Key Highlights / Learnings Section -->
    <div class="details-section">
      <h2 class="section-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent-amber);">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Key Highlights & Themes
      </h2>
      <ul class="highlights-list">
        ${book.highlights
          .map(
            (hl) => `
          <li class="highlight-item">
            <span class="highlight-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            <span>${hl}</span>
          </li>
        `
          )
          .join("")}
      </ul>
    </div>

    <!-- Chapters / Table of Contents -->
    <div class="details-section">
      <h2 class="section-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent-amber);">
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
        Table of Contents (Sample Chapters)
      </h2>
      <div class="chapters-accordion">
        ${book.chapters
          .map(
            (chap) => `
          <div class="chapter-row">
            <div>
              <span class="chapter-num">${chap.num}</span>
              <span class="chapter-title">${chap.title}</span>
            </div>
            <span class="chapter-time">${chap.time}</span>
          </div>
        `
          )
          .join("")}
      </div>
    </div>

    <!-- Reader Reviews Section -->
    <div class="details-section" style="border-bottom: none;">
      <h2 class="section-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent-amber);">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        Featured Reader Reviews
      </h2>
      <div class="reviews-container">
        ${book.reviews
          .map(
            (rev) => `
          <div class="review-card">
            <div class="reviewer-meta">
              <span class="reviewer-name">${rev.name}</span>
              ${
                rev.verified
                  ? '<span class="reviewer-verified">✓ Verified Kindle Reader</span>'
                  : ""
              }
            </div>
            <p class="review-quote">"${rev.quote}"</p>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

// Helper: Open Kindle Interactive E-Reader Modal
function openReader(bookId) {
  const book = booksData.find((b) => b.id === bookId);
  if (!book) return;

  readerTitle.textContent = book.title;
  readerChapter.textContent = book.sampleExcerpt.chapter;
  readerContent.innerHTML = `
    <h2>${book.sampleExcerpt.chapter}</h2>
    ${book.sampleExcerpt.text}
  `;
  readerProgress.textContent = `Page 1 of 12 • 4 mins left in chapter`;
  readerModal.classList.add("active");
}

function closeReader() {
  readerModal.classList.remove("active");
}

// Audible Simulation
function simulateAudioSample(bookId) {
  const book = booksData.find((b) => b.id === bookId);
  alert(`🎧 Playing 30-second Audible Narration Sample for "${book.title}"...\nNarrated in high-definition spatial audio.`);
}

// Helper: Generate Star Rating SVGs
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  let starsHtml = "";

  for (let i = 0; i < fullStars; i++) {
    starsHtml += `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>`;
  }

  if (hasHalf) {
    starsHtml += `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.4"></path>
        <polygon points="12 2 15.09 8.26 17 9.27 12 14.14 12 17.77 12 2"></polygon>
      </svg>`;
  }

  return starsHtml;
}
