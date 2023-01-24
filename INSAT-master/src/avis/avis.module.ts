import { Module } from '@nestjs/common';
import { AvisService } from './avis.service';
import { AvisController } from './avis.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {AvisEntity} from './entities/avi.entity';
import { SuperUserEntity } from 'src/super-users/entities/super-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AvisEntity]),TypeOrmModule.forFeature([SuperUserEntity])],
  controllers: [AvisController],
  providers: [AvisService]
})
export class AvisModule {}
