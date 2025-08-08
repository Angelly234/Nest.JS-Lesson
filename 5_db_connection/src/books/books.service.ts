import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './book.entity'; 

@Injectable()
export class BooksService {
    constructor(
    @InjectRepository(Book)  
    private bookRepository: Repository<Book>,  
  ) {}

  create(data: CreateBookDto): Promise<Book> {
    const book = this.bookRepository.create(data);  
    return this.bookRepository.save(book); 
  }

  // Read (GET)
  findAll(): Promise<Book[]> {
    return this.bookRepository.find();  
  }

   // READ ONE  
  findOne(id: number): Promise<Book | null> {
    return this.bookRepository.findOne({ where: { id } });  
  }

  // Update (PATCH)
  async update(id: number, data: Partial<Book>): Promise<Book | null> {
  await this.bookRepository.update(id, data);  
  return this.findOne(id);  
  }

  // Delete (DELETE)
  async remove(id: number): Promise<void> {
    await this.bookRepository.delete(id);  
  }
}



