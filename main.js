import Book from './book.js';
import EBook from './ebook.js';

const book1 = new Book("Веріті", "Коллін Гувер", 2023);
const book2 = new Book("Хірург", "Тесс Геррітсен", 2016);

book1.printInfo();
book2.printInfo();

const ebook1 = new EBook("Приховані малюнки", "Джейсон Рекулак", 2022, "PDF");

ebook1.printInfo();
