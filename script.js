//your JS code here. If required.
document.querySelector("form").addEventListener("submit", function (e){
    e.preventDefault(); // Prevent default form submission
let title = document.getElementById("title").value;
let author = document.getElementById("author").value;
let isbn = document.getElementById("isbn").value;

let bookList=document.getElementById("book-list");
let tr=document.createElement("tr");
tr.innerHTML=`
	<td>${title}</td>
	<td>${author}</td>
	<td>${isbn}</td>
	<td><button class="btn btn-danger btn-sm delete">X</button></td>
	
`;
bookList.appendChild(tr);
	document.getElementById("title").clear("");
	document.getElementById("author").clear("");document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let isbn = document.getElementById("isbn").value;

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

    // Corrected input clearing
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
});

// Delete book functionality
document.getElementById("book-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }
});

	document.getElementById("isbn").clear("");
});

document.getElementById("book-list").addEventListener("click",(e)=>{
	if(e.target.classList.contains("delete")){
		e.target.parentElement.parentElement.remove();
	}
});


