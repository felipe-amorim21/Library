let myLibrary = []

function Book(title, author, pages, is_read){
	this.title = title
	this.author = author
	this.pages = pages
	this.is_read = is_read
	this.info = function() {
		let read = ''
		if (this.is_read === true) {
			read = 'already read'
		}
		else {
			read = 'not ready yet'
		}
		return `${title} by ${author}, ${pages} pages, ${read}` 
	}
}


function addBookToLibrary(book) {
    if (book instanceof (Book)) {
        myLibrary.push(book)
    }
}

function showBooks(){
    for(let i = 0; i <= myLibrary.length-1; i++){
        console.log((myLibrary[i]).info())
    }
}

let book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)

addBookToLibrary(book1)

showBooks()