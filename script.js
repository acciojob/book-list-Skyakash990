document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    let title = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();
    let isbn = document.getElementById("isbn").value.trim();

    // Validation: Ensure all fields are filled
    if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields.");
        return;
    }

    let bookList = document.getElementById("book-list");

    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="btn btn-danger btn-sm delete">X</button></td>
    `;

    bookList.appendChild(tr);

    // Clear input fields after adding a book
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
});

// Event listener for delete functionality
document.getElementById("book-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.closest("tr").remove(); // Remove the entire row
    }
});
