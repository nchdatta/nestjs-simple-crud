import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './dto/book.dto';
import { v4 as uuid } from 'uuid';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) { }

    @Get()
    findAll(): Book[] {
        return this.bookService.findAllBooks();
    }

    @Get(":id")
    find(@Param('id') id): Book {
        return this.bookService.findBook(id);
    }

    @Post('/add')
    add(@Body() book: Book): string {
        const id = uuid();
        book.id = id;
        return this.bookService.addBook(book);
    }

    @Put('/upadte/:id')
    update(@Param('id') id: string, @Body() book: Book): string {
        return this.bookService.updateBook(id, book);
    }

    @Delete('/delete/:id')
    delete(@Param('id') id): string {
        return this.bookService.deleteBook(id);
    }
}
