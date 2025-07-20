// src/students/dto/create-student.dto.ts
import { IsString, IsInt, Min, MinLength } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsInt()
  @Min(1)
  age: number;
}
