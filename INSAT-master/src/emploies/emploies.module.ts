import { Module } from '@nestjs/common';
import { EmploiesService } from './emploies.service';
import { EmploiesController } from './emploies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployEntity } from './entities/employ.entity';

@Module({
  imports:[TypeOrmModule.forFeature([EmployEntity])],
  controllers: [EmploiesController],
  providers: [EmploiesService]
})
export class EmploiesModule {}
