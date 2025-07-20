import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student-dto';

@Injectable()
export class StudentsService {
  private students = [
    { id: '1', name: 'Jelly', age: 20 },
    { id: '2', name: 'Jenny', age: 22 },
  ];

  // CREATE
  create(createStudentDto: CreateStudentDto) {
    const newStudent = {
      id: new Date().toISOString(),
      ...createStudentDto,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  // READ ALL
  findAll() {
    return this.students;
  }

  // READ one student by ID
  findOne(id: string) {
    return this.students.find(student => student.id === id);
  }

  // UPDATE: Modify an existing student
  update(id: string, updates: Partial<CreateStudentDto>) {
    const student = this.findOne(id);
    if (!student) return null;
    Object.assign(student, updates);
    return student;
  }

  // DELETE: Remove a student by ID
  remove(id: string) {
    this.students = this.students.filter(student => student.id !== id);
    return { message: 'Student deleted' };
  }
}
