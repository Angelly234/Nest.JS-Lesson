// src/books/books.controller.ts
import { Controller,Get, Post, Body, Patch, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.model';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() body: any) {
    return this.booksService.create(body);
  }

  @Get()
  findAll(): Book[] {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Book | undefined {
    return this.booksService.findOne(id);
  }

  // PATCH /books/:id → Update a specific book by ID
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: any): Book | null {
    return this.booksService.update(id, data);  
  }

  // DELETE /books/:id → Delete a specific book by ID
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): { message: string } {
    return this.booksService.remove(id);
  }
}
