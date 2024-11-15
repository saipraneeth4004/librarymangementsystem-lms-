// script.js

// Show selected section
function showSection(sectionId) {
  document.querySelectorAll('section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

// Display books in a table format
function displayBooks() {
  const booksTable = document.getElementById('booksTable');
  booksTable.innerHTML = '<tr><th>Title</th><th>Author</th><th>Action</th></tr>';
  books.forEach(book => {
    const row = `<tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td><button onclick="deleteBook(${book.id})">Delete</button></td>
    </tr>`;
    booksTable.innerHTML += row;
  });
}

// Add a new book
function addBook() {
  const title = document.getElementById('modalBookTitle').value;
  const author = document.getElementById('modalBookAuthor').value;
  books.push({ id: Date.now(), title, author });
  closeModal();
  displayBooks();
}

// Delete a book
function deleteBook(id) {
  books = books.filter(book => book.id !== id);
  displayBooks();
}

// Open and close modal
function openModal(type) {
  document.getElementById('modalContainer').style.display = 'flex';
  if (type === 'addBook') {
    document.getElementById('addBookModal').style.display = 'block';
  }
}

function closeModal() {
  document.getElementById('modalContainer').style.display = 'none';
  document.querySelectorAll('.modal-content').forEach(modal => modal.style.display = 'none');
}

// Initialize
showSection('dashboard');
displayBooks();
