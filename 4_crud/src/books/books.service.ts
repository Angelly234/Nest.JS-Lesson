import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  // Create (POST)
  create(bookData: Omit<Book, 'id'>): Book {
    const maxId = this.books.length > 0
      ? Math.max(...this.books.map(b => b.id))
      : 0;

    const newBook: Book = {
      id: maxId + 1,
      ...bookData
    };
    this.books.push(newBook);
    return newBook;
  }

  // Read (GET)
  findAll(): Book[] {
    return this.books; 
  }

  // Read (GET) by ID
  findOne(id: number): Book | undefined {
    return this.books.find(book => book.id === id);  // Find the book by ID
  }

  // Update (PATCH)
  update(id: number, data: any): Book | null {
    const book = this.findOne(id);  // Find the book by ID
    if (!book) return null;  // If not found, return null

    // Update the book properties with the new data
    Object.assign(book, data);  // This updates only the fields provided in data
    return book;  
  }

  // Delete (DELETE)
  remove(id: number): { message: string } {
    const index = this.books.findIndex(b => b.id === id);  // Find the index of the book
    if (index === -1) return { message: 'Not found' };  // If book not found, return a message

    this.books.splice(index, 1);  // Remove the book from the array
    return { message: 'Book Successfully Deleted' };  // Return a success message
  }

}