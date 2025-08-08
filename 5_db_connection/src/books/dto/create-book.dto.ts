// src/books/dto/create-book.dto.ts
import { IsString, MinLength, IsInt, IsOptional } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  @MinLength(3)
  author: string;

  @IsString()
  isbn: string;

  @IsInt()
  published: number;

}
