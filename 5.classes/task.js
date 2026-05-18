class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor (name)  {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const foundBook = this.books.find(book => book[type] === value);
        return foundBook !== undefined ? foundBook : null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        if (index !== -1) {
            const book = this.books[index];
            this.books.splice(index, 1);
            return book;
        } else {
            return null;
        }
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook (
    new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    )
);

library.addBook (
    new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
    )
);

library.addBook(new NovelBook(
        "Джейн Остин",
        "Гордость и предубеждение",
        1813,
        416
    )
);

library.addBook(new Magazine(
        "Forbes", 
        1917, 
        45
    )
);

console.log(library.findBookBy("releaseDate", 1917));
console.log("Количество книг до выдачи: " + library.books.length);
const issuedBook = library.giveBookByName("Гордость и предубеждение");
console.log("Количество книг после выдачи: " + library.books.length);
issuedBook.state = 100;
library.addBook(issuedBook);
console.log("Количество книг после возвращения: " + library.books.length);