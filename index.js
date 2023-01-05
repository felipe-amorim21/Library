const books = document.getElementById('books')
const formbtn = document.getElementById('formbtn')
const bookform = document.querySelector('form')
const btn = document.getElementById('btn')
const closebtn = document.getElementById('close')


btn.addEventListener('click', function(){
    bookform.style.display = 'flex'
    books.style.display = 'none'
})

closebtn.addEventListener('click', function(){
    bookform.style.display = 'none'
    books.style.display = 'grid'
})

formbtn.addEventListener('click', function(e){
    e.preventDefault()
    let bookname = document.getElementById('bookname')
    let bookauthor = document.getElementById('bookauthor')
    let bookpages = document.getElementById('bookpages')
    let bookread = document.getElementById('bookread')
    if (bookname.value === '' | bookauthor.value === '' | bookpages.value === '') {
        return false
    }
    let book = new Book(bookname.value,bookauthor.value, bookpages.value, bookread.checked, myLibrary.length )
    addBookToLibrary(book)
    bookform.style.display = 'none'
    books.style.display = 'grid'
    showBooks()
    bookname.value = ''
    bookauthor.value = ''
    bookpages.value = ''
})




let myLibrary = []

function Book(title, author, pages, is_read, data){
	this.title = title
	this.author = author
	this.pages = pages
	this.is_read = is_read
    this.data = data


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


function createCard(bookContent) {
    let bookCard = document.createElement('div')
    console.log(`dhsjadhjshdsjd ${this}`)
    let btn2 = document.createElement('button')
    let readBtn = document.createElement('button')
    btn2.addEventListener('click', function() {
        if (bookContent.data > -1) { 
            myLibrary.splice(bookContent.data, 1); 
            showBooks()
          }
    })
    readBtn.addEventListener('click', function(){
        if (bookContent.is_read === true){
            bookContent.is_read = false
            showBooks()
        }
        else {
            bookContent.is_read = true
            showBooks()
        }
    })
        bookCard.classList.add('card')  
        bookCard.textContent = bookContent.info()
        btn2.classList.add('btn2')
        btn2.textContent = 'X'
        readBtn.classList.add('readBtn')
        readBtn.textContent = 'Change read status'
        bookCard.appendChild(btn2)
        bookCard.appendChild(readBtn)
        books.appendChild(bookCard)
}

function showBooks(){
    clearDisplay()
    for(let i = 0; i <= myLibrary.length-1; i++){
        console.log((myLibrary[i]).info())
        myLibrary[i].data = i 
        createCard((myLibrary[i]))
    }
}


function clearDisplay() {
    books.textContent = ''
}

