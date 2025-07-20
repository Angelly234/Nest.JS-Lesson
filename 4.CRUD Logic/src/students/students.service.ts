import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student-dto';

@Injectable()
export class StudentsService {
  private students = [
    { id: 1, name: 'Jelly', age: 20 },
    { id: 2, name: 'Jenny', age: 22 },
  ];

  // CREATE
  create(createStudentDto: CreateStudentDto) {
    const maxId = this.students.length > 0
      ? Math.max(...this.students.map(s => s.id))
      : 0;

    const newStudent = {
      id: maxId + 1, // auto-incremented ID
      ...createStudentDto,
    };

    this.students.push(newStudent);
    return newStudent;
  }

  // READ ALL
  findAll() {
    return this.students;
  }

  // READ ONE
  findOne(id: number) {
    return this.students.find(student => student.id === id);
  }

  // UPDATE
  update(id: number, updates: Partial<CreateStudentDto>) {
    const student = this.findOne(id);
    if (!student) return null;
    Object.assign(student, updates);
    return student;
  }

  // DELETE
  remove(id: number) {
    const index = this.students.findIndex(student => student.id === id);
    if (index === -1) return { message: 'Student not found' };
    this.students.splice(index, 1);
    return { message: 'Student deleted' };
  }
}
