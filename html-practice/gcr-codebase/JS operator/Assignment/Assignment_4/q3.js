class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.issued = false;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    issueBook(title) {
        for (let book of this.books) {
            if (book.title === title && book.issued === false) {
                book.issued = true;
                console.log(title + " issued.");
                return;
            }
        }
        console.log("Book not available.");
    }

    showBooks() {
        for (let book of this.books) {
            console.log(book.title, "-", book.issued ? "Issued" : "Available");
        }
    }
}

let library = new Library();
library.addBook(new Book("Java Basics", "James"));
library.addBook(new Book("Web Development", "John"));
library.showBooks();
library.issueBook("Java Basics");
library.showBooks();