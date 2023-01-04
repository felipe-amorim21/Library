
const bookGrid = document.getElementById('bookGrid')
const btn  = document.getElementById('btn')
const formbtn = document.getElementById('formbtn')
const bookform = document.querySelector('form') 

btn.addEventListener('click', function(){
    
    bookform.style.display = 'flex'
    bookGrid.style.display = 'none'
})

formbtn.addEventListener('click', function(e){
    e.preventDefault()
    let bookname = document.getElementById('bookname')
    let bookauthor = document.getElementById('bookauthor')
    let bookpages = document.getElementById('bookpages')
    let bookread = document.getElementById('bookread')
    if (bookname.value === '' | bookauthor.author === '' | bookpages.value === '') {
        return false
    }
    let book = new Book(bookname.value,bookauthor.value, bookpages.value, bookread.checked )
    addBookToLibrary(book)
    bookform.style.display = 'none'
    bookGrid.style.display = 'grid'
    showBooks()
    bookname.value = ''
    bookauthor.value = ''
    bookpages.value = ''
})

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
    clearDisplay()
    for(let i = 0; i <= myLibrary.length-1; i++){
        console.log((myLibrary[i]).info())
        let book = document.createElement('div')
        book.classList.add('card')
        book.textContent = (myLibrary[i]).info()
        bookGrid.appendChild(book)
    }
}


function clearDisplay() {
    bookGrid.textContent = ''
}
