// src/books/entities/book.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn() // Automatically generates a unique ID for each book
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  isbn: string;

  @Column()
  published: number;

}


