import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseEntity } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(CourseEntity)
    private coursRepository: Repository<CourseEntity>
  ){
  }

  async findCours(filiere:string,niveau:number){
     const courses= await this.coursRepository.find({ 
      where: { 
        filiere: filiere, niveau:niveau
      } 
    });
    
    return courses;
  }
  
}
