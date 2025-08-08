// src/books/books.controller.ts
import { Controller, Get, Post, Body, Patch, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';  // Import DTO

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // POST /books → Create a new book
  @Post()
  create(@Body() body: CreateBookDto) {
    return this.booksService.create(body);  // Pass validated data to the service
  }

  // GET /books → Get all books
  @Get()
  findAll() {
    return this.booksService.findAll();  // Get all books from the database
  }

  // GET /books/:id → Get a specific book by ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.findOne(id);  // Get book by ID
  }

  // PATCH /books/:id → Update a specific book by ID
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: CreateBookDto) {
    return this.booksService.update(id, data);  // Update book using DTO data
  }

  // DELETE /books/:id → Delete a specific book by ID
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.remove(id);  // Remove book by ID
  }
}


