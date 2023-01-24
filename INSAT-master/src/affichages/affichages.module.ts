import { Module } from '@nestjs/common';
import { AffichagesService } from './affichages.service';
import { AffichagesController } from './affichages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AffichageEntity } from './entities/affichage.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AffichageEntity])],
  controllers: [AffichagesController],
  providers: [AffichagesService]
})
export class AffichagesModule {}
