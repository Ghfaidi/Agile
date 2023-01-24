import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  async getCourses(@Query('filiere') filiere: string, @Query('niveau') niveau: number){
    return await this.coursesService.findCours(filiere,niveau)
  }
}
