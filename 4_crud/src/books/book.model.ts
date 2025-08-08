// src/books/book.model.ts
//s
export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  published: number;
  inStock?: boolean;
}