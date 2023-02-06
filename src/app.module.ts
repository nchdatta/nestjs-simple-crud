import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BookModule, UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_DB}:${process.env.MONGO_PASSWORD}@cluster0.uqsfqjn.mongodb.net/test-db?retryWrites=true&w=majority`)],
  controllers: [],
  providers: [],
})
export class AppModule { }
