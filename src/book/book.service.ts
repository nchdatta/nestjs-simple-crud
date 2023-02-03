import { Injectable } from '@nestjs/common';
import { Book } from './dto/book.dto';

@Injectable()
export class BookService {
    public books: Book[] = [];

    addBook(book: Book): string {
        this.books.push(book);
        return "Book has been succesfully added.";
    }
    findBook(id: string): Book {
        const book = this.books.find(b => b.id === id);
        return book;
    }
    findAllBooks(): Book[] {
        return this.books;
    }

    deleteBook(id: string): string {
        const booksFiltered = this.books.filter(b => b.id !== id);
        this.books = booksFiltered;
        return "Book has been deleted.";
    }
    updateBook(id: string, book: Book): string {
        const filtered = this.books.filter(b => b.id !== id);
        const updated = [...filtered, { id: id, ...book }]
        this.books = updated;
        return "Book has been updated.";
    }
}
