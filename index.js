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

