async function YouBooks() {
    let response = await fetch("https:striveschool-api.herokuapp.com/books");
    let book = await response.json();
    displayBooks(book);
  }
  
  function createBookCard(book) {
    const card = document.createElement("div");
    card.className = "col-12 col-sm-6 col-md-4 mb-3";
    card.innerHTML = `
      <div class="card h-100">
        <img src="${book.img}" alt="${book.title}">
        <div class="card-body bg-dark text-light">
          <h3 class="card-title">${book.title}</h3>
          <p class="card-text">Prezzo: ${book.price}€</p>
          <div class="d-flex justify-content-between">
            <button class="btn bg-black text-success discard-btn">Buy Now</button>
            <button class="btn bg-black discard-btn text-danger">Delete</button>
          </div>
        </div>
      </div>`;
  
    const deleteButton = card.querySelector(".discard-btn.text-danger");
    deleteButton.addEventListener("click", () => {
      card.remove();
    });
  
    return card;
  }
  
  
  
  
  function displayBooks(books) {
    const container = document.getElementById("libri");
    books.forEach((book) => {
      container.appendChild(createBookCard(book));
    });
  }
  
  YouBooks();