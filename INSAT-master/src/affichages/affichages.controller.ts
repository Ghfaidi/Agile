import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AffichagesService } from './affichages.service';
import { CreateAffichageDto } from './dto/create-affichage.dto';
import { UpdateAffichageDto } from './dto/update-affichage.dto';

@Controller('affichages')
export class AffichagesController {
  constructor(private readonly affichagesService: AffichagesService) {}

  @Get()
  async getAffichages(@Query('filiere') filiere: string, @Query('niveau') niveau: number) {
    return await this.affichagesService.findaffichage(filiere, niveau);
  }

 
}
