
const yearNames = {
    1: '1st Year BSIT',
    2: '2nd Year BSIT',
    3: '3rd Year BSIT'
};

const palettes = [
    ['#376f65','#b67549','#516e98','#975e75','#897340','#487d88','#a9684d','#567c5d','#75628e','#ac5e58'],
    ['#4c7191','#b27d49','#4d8074','#a65f59','#7a65a0','#a27e48','#49808a','#a16f7b','#60845d','#90624c'],
    ['#885b73','#487d80','#b57b43','#6a7ba4','#a5634c','#708b57','#a47a61','#5d7494','#ac6b73','#497c6f']
];

const books = Array.from({ length: 3 }, (_, yearIndex) =>
    Array.from({ length: 10 }, (_, index) => ({
        id: `y${yearIndex + 1}-b${index + 1}`,
        year: yearIndex + 1,
        title: `Book ${String(index + 1).padStart(2, '0')}`,
        color: palettes[yearIndex][index],
        available: false
    }))
).flat();

// FIRST YEAR BOOKS

const firstYearBook1 = books.find(book => book.id === 'y1-b1');
if (firstYearBook1) {
    firstYearBook1.title = 'Computer Generations and Classification';
    firstYearBook1.available = true;
    firstYearBook1.url = 'book-firstyear1.html';
}

const firstYearBook2 = books.find(book => book.id === 'y1-b2');
if (firstYearBook2) {
    firstYearBook2.title = 'Computer Generations and Classification';
    firstYearBook2.available = true;
    firstYearBook2.url = 'book-firstyear2.html';
}

const firstYearBook3 = books.find(book => book.id === 'y1-b3');
if (firstYearBook3) {
    firstYearBook3.title = 'Computer Hardware and Software';
    firstYearBook3.available = true;
    firstYearBook3.url = 'book-firstyear3.html';
}

const firstYearBook4 = books.find(book => book.id === 'y1-b4');
if (firstYearBook4) {
    firstYearBook4.title = 'Input, Processing, Output and Storage';
    firstYearBook4.available = true;
    firstYearBook4.url = 'book-firstyear4.html';
}

const firstYearBook5 = books.find(book => book.id === 'y1-b5');
if (firstYearBook5) {
    firstYearBook5.title = 'Data, Information and Number Systems';
    firstYearBook5.available = true;
    firstYearBook5.url = 'book-firstyear5.html';
}

const firstYearBook6 = books.find(book => book.id === 'y1-b6');
if (firstYearBook6) {
    firstYearBook6.title = 'Operating System Fundamentals';
    firstYearBook6.available = true;
    firstYearBook6.url = 'book-firstyear6.html';
}

const firstYearBook7 = books.find(book => book.id === 'y1-b7');
if (firstYearBook7) {
    firstYearBook7.title = 'Programs and Processes';
    firstYearBook7.available = true;
    firstYearBook7.url = 'book-firstyear7.html';
}

const firstYearBook8 = books.find(book => book.id === 'y1-b8');
if (firstYearBook8) {
    firstYearBook8.title = 'Computer Internets and the Internet';
    firstYearBook8.available = true;
    firstYearBook8.url = 'book-firstyear8.html';
}

const firstYearBook9 = books.find(book => book.id === 'y1-b9');
if (firstYearBook9) {
    firstYearBook9.title = 'Cybersecurity, privacy, and computer ethics';
    firstYearBook9.available = true;
    firstYearBook9.url = 'book-firstyear9.html';
}

const firstYearBook10 = books.find(book => book.id === 'y1-b10');
if (firstYearBook10) {
    firstYearBook10.title = 'Emerging Technologies and Artificial Intelligence';
    firstYearBook10.available = true;
    firstYearBook10.url = 'book-firstyear10.html';
}

// THIRD YEAR BOOKS

const firstBook = books.find(book => book.id === 'y3-b1');
if (firstBook) {
    firstBook.title = 'The Internet and World Wide Web';
    firstBook.available = true;
    firstBook.url = 'book-thirdyear1.html';
}

const secondBook = books.find(book => book.id === 'y3-b2');
if (secondBook) {
    secondBook.title = 'WEB BROWSERS, SERVERS, AND HTTP/HTTPS';
    secondBook.available = true;
    secondBook.url = 'book-thirdyear2.html';
}

const thirdBook = books.find(book => book.id === 'y3-b3');
if (thirdBook) {
    thirdBook.title = 'HTML STRUCTURE AND SEMANTIC ELEMENTS';
    thirdBook.available = true;
    thirdBook.url = 'book-thirdyear3.html';
}

const fourthBook = books.find(book => book.id === 'y3-b4');
if (fourthBook) {
    fourthBook.title = 'CSS STYLING, LAYOUTS, FLEXBOX AND GRID';
    fourthBook.available = true;
    fourthBook.url = 'book-thirdyear4.html';
}

const fifthBook = books.find(book => book.id === 'y3-b5');
if (fifthBook) {
    fifthBook.title = 'Resposive Web Design';
    fifthBook.available = true;
    fifthBook.url = 'book-thirdyear5.html';
}

const sixthBook = books.find(book => book.id === 'y3-b6');
if (sixthBook) {
    sixthBook.title = 'Advanced HTML Forms and Form Validation';
    sixthBook.available = true;
    sixthBook.url = 'book-thirdyear6.html';
}

const seventhBook = books.find(book => book.id === 'y3-b7');
if (seventhBook) {
    seventhBook.title = 'User Interface Design and Accessibility Fundamentals';
    seventhBook.available = true;
    seventhBook.url = 'book-thirdyear7.html';
}

// YEAR LEVEL PASSKEYS

const yearPasskeys = {
    1: 'firstyearbsit',
    2: 'secondyearbsit',
    3: 'thirdyearbsit'
};

let selectedBook = null;
let view = 'all';

const container = document.getElementById('shelvesContainer');
const searchInput = document.getElementById('searchInput');
const pageTitle = document.getElementById('pageTitle');
const pageDescription = document.getElementById('pageDescription');
const bookCount = document.getElementById('bookCount');
const modal = document.getElementById('bookModal');

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, c => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[c]));
}

// RENDER BOOK

function renderBook(book) {
    return `
        <div class="book-slot">
            <button
                type="button"
                class="book"
                style="--cover:${book.color}"
                data-book-id="${book.id}"
                aria-label="${escapeHTML(book.title)}, ${yearNames[book.year]}">

                <span class="book-emblem" aria-hidden="true">✧</span>

                <span class="book-title">
                    ${escapeHTML(book.title)}
                </span>

                <span class="book-footer">
                    BSIT • ${book.year}${book.year === 1 ? 'ST' : book.year === 2 ? 'ND' : 'RD'} YEAR
                </span>
            </button>
        </div>
    `;
}

// RENDER LIBRARY

function render() {
    const query = searchInput.value.trim().toLowerCase();

    document.querySelectorAll('[data-view]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });

    const titles = {
        all: 'My Library',
        1: '1st Year Library',
        2: '2nd Year Library',
        3: '3rd Year Library',
        continue: 'Continue Reading',
        bookmarks: 'Bookmarks'
    };

    pageTitle.innerHTML =
        `${titles[view]}<span class="title-dot">.</span>`;

    pageDescription.textContent =
        view === 'continue'
            ? 'Your recently opened lessons will appear here when the reader is ready.'
            : view === 'bookmarks'
            ? 'Your saved lessons will appear here when bookmarks are available.'
            : 'Explore your BSIT learning materials and discover new knowledge, one book at a time.';

    if (view === 'continue' || view === 'bookmarks') {
        bookCount.textContent = '0';

        container.innerHTML = `
            <div class="empty-state">
                <h2>
                    ${view === 'continue'
                        ? 'No reading history yet'
                        : 'No bookmarks yet'}
                </h2>
                <p>
                    ${view === 'continue'
                        ? 'Once the Book Reader is ready, your reading progress will appear here.'
                        : 'When we add the Book Reader, you will be able to save your favorite lessons here.'}
                </p>
            </div>
        `;
        return;
    }

    const filtered = books.filter(book =>
        (view === 'all' || book.year === Number(view)) &&
        (`${book.title} ${yearNames[book.year]}`
            .toLowerCase().includes(query))
    );

    bookCount.textContent = filtered.length;

    if (!filtered.length) {
        container.innerHTML = `
            <div class="empty-state">
                <h2>No books found</h2>
                <p>Try a different title or year level.</p>
            </div>
        `;
        return;
    }

    const years = [1, 2, 3].filter(year =>
        filtered.some(book => book.year === year)
    );

    container.innerHTML = years.map(year => {
        const yearBooks = filtered.filter(book => book.year === year);
        const rows = [];

        for (let i = 0; i < yearBooks.length; i += 5) {
            rows.push(`
                <div class="shelf-row">
                    <div class="books-line">
                        ${yearBooks.slice(i, i + 5).map(renderBook).join('')}
                    </div>
                    <div class="shelf-plank" aria-hidden="true"></div>
                </div>
            `);
        }

        return `
            <section class="year-section" id="year-${year}">
                <div class="section-heading">
                    <div>
                        <h2>${yearNames[year]}</h2>
                        <p>Explore learning materials for this year level</p>
                    </div>
                    <span class="book-count">
                        ${yearBooks.length}
                        ${yearBooks.length === 1 ? 'Book' : 'Books'}
                    </span>
                </div>
                ${rows.join('')}
            </section>
        `;
    }).join('');
}

// OPEN BOOK MODAL

function openBook(book) {
    selectedBook = book;

    document.getElementById('modalTitle').textContent = book.title;
    document.getElementById('modalYear').textContent = yearNames[book.year];

    document.getElementById('modalText').textContent =
        book.available
            ? 'Explore this e-book and its learning materials. Select Read to enter your year-level passkey.'
            : 'This e-book is not available yet. You can enter your year-level passkey, but the reader will be accessible once the book content is ready.';

    const cover = document.getElementById('modalCover');
    cover.style.background = book.color;
    cover.textContent = book.title;

    document.getElementById('modalDone').hidden = false;
    document.getElementById('passkeyForm').hidden = true;
    document.getElementById('bookPasskey').value = '';
    document.getElementById('passkeyError').hidden = true;

    modal.hidden = false;
    document.getElementById('modalClose').focus();
}

// CLOSE MODAL

function closeModal() {
    modal.hidden = true;
    selectedBook = null;
}

// BOOK CLICK

container.addEventListener('click', event => {
    const button = event.target.closest('[data-book-id]');
    if (!button) return;

    const book = books.find(
        book => book.id === button.dataset.bookId
    );

    if (book) openBook(book);
});

// YEAR LEVEL FILTERS

document.querySelectorAll('[data-view]').forEach(button => {
    button.addEventListener('click', () => {
        view = button.dataset.view;
        searchInput.value = '';

        render();
        closeSidebar();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// SEARCH

searchInput.addEventListener('input', render);

// MODAL BUTTONS

document.getElementById('modalClose')
    .addEventListener('click', closeModal);

document.getElementById('modalDone')
    .addEventListener('click', () => {
        if (!selectedBook) return;

        document.getElementById('modalDone').hidden = true;
        document.getElementById('passkeyForm').hidden = false;
        document.getElementById('bookPasskey').focus();
    });

// PASSKEY VALIDATION

document.getElementById('passkeyForm')
    .addEventListener('submit', event => {
        event.preventDefault();

        if (!selectedBook) return;

        const entered =
            document.getElementById('bookPasskey').value;

        if (entered !== yearPasskeys[selectedBook.year]) {
            document.getElementById('passkeyError').hidden = false;
            document.getElementById('bookPasskey').select();
            return;
        }

        document.getElementById('passkeyError').hidden = true;

        if (selectedBook.available && selectedBook.url) {
            window.location.href = selectedBook.url;
        } else {
            document.getElementById('modalText').textContent =
                'Correct passkey. This book is not available yet.';

            document.getElementById('passkeyForm').hidden = true;
            document.getElementById('modalDone').hidden = false;
        }
    });

// CLOSE MODAL WHEN CLICKING BACKDROP

modal.addEventListener('click', event => {
    if (event.target === modal) {
        closeModal();
    }
});

// MOBILE SIDEBAR

const toggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

function closeSidebar() {
    if (!toggle || !sidebar) return;

    sidebar.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open sidebar');
    toggle.textContent = '☰';
}

if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
        const isOpen = sidebar.classList.toggle('open');

        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.setAttribute(
            'aria-label',
            isOpen ? 'Close sidebar' : 'Open sidebar'
        );

        toggle.textContent = isOpen ? '✕' : '☰';
    });

    // CLOSE SIDEBAR WHEN CLICKING OUTSIDE
    document.addEventListener('click', event => {
        if (
            sidebar.classList.contains('open') &&
            !sidebar.contains(event.target) &&
            !toggle.contains(event.target)
        ) {
            closeSidebar();
        }
    });

    // CLOSE SIDEBAR USING ESCAPE
    document.addEventListener('keydown', event => {
        if (
            event.key === 'Escape' &&
            sidebar.classList.contains('open')
        ) {
            closeSidebar();
            toggle.focus();
        }
    });

    // CLOSE SIDEBAR WHEN SCREEN BECOMES DESKTOP
    window.addEventListener('resize', () => {
        if (window.innerWidth > 760) {
            closeSidebar();
        }
    });
}

// CLOSE MODAL USING ESCAPE

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !modal.hidden) {
        closeModal();
    }
});

// CURRENT YEAR

const currentYear = document.getElementById('currentYear');

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// INITIAL RENDER

render();
