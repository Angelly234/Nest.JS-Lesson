// src/students/students.service.ts
import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student-dto';

@Injectable()
export class StudentsService {
// In-memory array to store students
  private students = [
    { id: 1, name: 'Jelly', age: 20 },
    { id: 2, name: 'Jenny', age: 22 },
  ];

  // CREATE: Add a new student
  create(createStudentDto: CreateStudentDto) {
    const newStudent = { id: Date.now(), ...createStudentDto };  
    return newStudent;  
  }

  // READ: Get all students
  findAll() {
    return this.students; 
  }

  // READ: Get one student by ID
  findOne(id: number) {
    return this.students.find(student => student.id === id);  
  }

  // UPDATE: Modify an existing student's data
  update(id: number, updates: Partial<CreateStudentDto>) {
    const student = this.findOne(id);
    if (!student) return null;
    Object.assign(student, updates);
    return student;
  }

  // DELETE: Remove a student from the list
  remove(id: number) {
    this.students = this.students.filter(student => student.id !== id);
    return { message: 'Student deleted' };
  }
}
