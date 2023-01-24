import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { EmploiesService } from './emploies.service';
import { CreateEmployDto } from './dto/create-employ.dto';
import { UpdateEmployDto } from './dto/update-employ.dto';

@Controller('emploies')
export class EmploiesController {
  constructor(private readonly emploiesService: EmploiesService) {}

  @Get()
  async getEmploies(@Query('filiere') filiere: string, @Query('niveau') niveau: number) {
    return await this.emploiesService.findEmploie(filiere, niveau);
  }
}
