import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvisService } from './avis.service';
import { CreateAviDto } from './dto/create-avi.dto';
import {AvisEntity} from './entities/avi.entity'

@Controller('avis')
export class AvisController {
  constructor(private readonly avisService: AvisService) {}

  @Post()
  async create(@Body() avis: CreateAviDto,superUser :string) {
    return this.avisService.create(avis,superUser);
  }

  @Get()
  async findAll() {
    return await this.avisService.getAll();
  }

  


  @Get('/withComment/')
  async findOneWithComments(@Param('id') id: string) {
    return await this.avisService.findAvisWithCommentsAndUsers(id);
  }
/*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avisService.findOne(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() avis: CreateAviDto) {
    return this.avisService.update(id, avis);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avisService.remove(id);
  }
*/
}
