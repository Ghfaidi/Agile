import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployDto } from './dto/create-employ.dto';
import { UpdateEmployDto } from './dto/update-employ.dto';
import { EmployEntity } from './entities/employ.entity';

@Injectable()
export class EmploiesService {
  constructor(
    @InjectRepository(EmployEntity)
    private emploieRepository : Repository<EmployEntity>
  ){}

  async findEmploie(filiere:string,niveau:number){
    const emploies= await this.emploieRepository.find({ 
      where: { 
        filiere: filiere, niveau:niveau
      } 
    });
    
    return emploies;
  }
}
