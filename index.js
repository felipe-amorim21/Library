
const bookGrid = document.getElementById('bookGrid')



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
        const book = document.createElement('div')
        book.classList.add('card')
        book.textContent = (myLibrary[i]).info()
        bookGrid.appendChild(book)
    }
}

let book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
let book2 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
let book3 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
let book4 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
let book5 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
let book6 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)
addBookToLibrary(book5)
addBookToLibrary(book6)

showBooks()