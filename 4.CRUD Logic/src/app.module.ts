import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [StudentsModule],

})
export class AppModule {}









