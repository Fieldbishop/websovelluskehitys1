
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

let header = document.createElement("h1");
let table = document.createElement('table');
let tableHeaders = document.createElement("thead");
let tableBody = document.createElement("tbody");
tableBody.id = "tabo";

let row = document.createElement("tr");
let heading1 = document.createElement('th');
let heading2 = document.createElement("th");

heading1.innerHTML="NAME";
heading2.innerHTML="PUBLISHED";
row.appendChild(heading1);
row.appendChild(heading2);
tableHeaders.appendChild(row);

for (var i=0; i < books.length; i++) {
	let row = document.createElement("tr");
	console.log(books[i].title);
	let item1 = document.createElement('th');
	let item2 = document.createElement("th");
	item1.innerHTML=books[i].title;
	item2.innerHTML=books[i].year;

	row.appendChild(item1);
	row.appendChild(item2);
	tableBody.appendChild(row);
}

document.body.appendChild(header);
table.appendChild(tableHeaders);
table.appendChild(tableBody);
document.body.appendChild(table);

document.getElementById("tabo").onclick = function(e){
	let indeksi=e.target.parentElement.rowIndex;
	console.log(indeksi);
	header.innerHTML= books[(indeksi-1)].title;
};