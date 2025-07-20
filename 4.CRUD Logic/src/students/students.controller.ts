import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student-dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  // CREATE
  @Post()
  create(@Body() dto: CreateStudentDto) {
    return this.studentsService.create(dto);
  }

  // READ ALL
  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  // READ ONE
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id); // convert to number
  }

  // UPDATE
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentDto: Partial<CreateStudentDto>,
  ) {
    return this.studentsService.update(+id, updateStudentDto);
  }

  // DELETE
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }
}

