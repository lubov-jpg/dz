import Book from './book';

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    printInfo() {
        super.printInfo();
        console.log(`Формат файлу: ${this.fileFormat}`);
    }
}

export default EBook;
