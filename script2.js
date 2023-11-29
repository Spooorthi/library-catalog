// Sample book data (replace with actual data)
const bookData = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
    { title: "1984", author: "George Orwell", genre: "Dystopian" },
    // Add more book data as needed
];

function searchBooks() {
    var searchQuery = document.getElementById("searchQuery").value.toLowerCase();
    var searchResults = document.getElementById("searchResults");

    // Clear previous search results
    searchResults.innerHTML = "";

    // Perform search and display results
    var matchingBooks = bookData.filter(function(book) {
        return book.title.toLowerCase().includes(searchQuery) || book.author.toLowerCase().includes(searchQuery) || book.genre.toLowerCase().includes(searchQuery);
    });

    if (matchingBooks.length > 0) {
        // Display search results
        var resultHtml = "<h3>Search Results:</h3><ul>";
        matchingBooks.forEach(function(book) {
            resultHtml += "<li><strong>" + book.title + "</strong> by " + book.author + " - Genre: " + book.genre + "</li>";
        });
        resultHtml += "</ul>";
        searchResults.innerHTML = resultHtml;
    } else {
        searchResults.innerHTML = "<p>No matching books found.</p>";
    }
}

function logout() {
    // Redirect to the login page
    window.location.href = "index.html";
}
