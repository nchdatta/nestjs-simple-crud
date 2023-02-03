import { Module } from '@nestjs/common';
import { MiddlewareConsumer, NestModule } from '@nestjs/common/interfaces';
import { BookController } from './book.controller';
import { BookMiddleware } from './book.middleware';
import { BookService } from './book.service';

@Module({
    imports: [],
    controllers: [BookController],
    providers: [BookService]
})
export class BookModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(BookMiddleware)
            .forRoutes('book');
    }
}
