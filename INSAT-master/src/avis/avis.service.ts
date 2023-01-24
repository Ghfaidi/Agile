import { Injectable } from '@nestjs/common';
import { CreateAviDto } from './dto/create-avi.dto';
import { Repository,createQueryBuilder } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {AvisEntity} from './entities/avi.entity'
import { ConflictException, NotFoundException } from '@nestjs/common/exceptions';
import { SuperUserEntity } from 'src/super-users/entities/super-user.entity';

@Injectable()
export class AvisService {
  constructor(
    @InjectRepository(AvisEntity)
    private avisRepository: Repository<AvisEntity>,
    @InjectRepository(SuperUserEntity)
    private superUserRepository: Repository<SuperUserEntity>
  ) {}


   async create(avis:CreateAviDto,superUser:string ) {
    const user = await this.superUserRepository.findOne({where: {id: superUser}});
    console.log(user);
    if (!user) {
      throw new NotFoundException('SuperUser not found');
    }else{
      try {
          const Avis = await this.avisRepository.create({
          Description: avis.Description,
          content: avis.content,
          SuperUser: { id: user.id }
        });
        console.log(Avis);
          return this.avisRepository.save(Avis);
          
        } catch{
          throw new ConflictException('Avis can not be created');
        }
    }
   }

    async getAll() {
      try {
        const avis = await this.avisRepository.find();
        console.log(avis);
        return await this.avisRepository.find();
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
    async findAvisWithCommentsAndUsers(avisId: string) {
      const avis = await this.avisRepository
        .createQueryBuilder('avis')
        .leftJoinAndSelect('avis.comments', 'comments')
        .leftJoinAndSelect('comments.user', 'user')
        .leftJoinAndSelect('avis.superuser', 'superuser')
        .where('avis.id = :id', { id: avisId })
        .getOne();
    
      return avis;
    }

/*
    async findOne(id): Promise<AvisEntity> {
      const Entity = await this.avisRepository.findOne({where: {id}});
      if (! Entity) {
        throw new NotFoundException();
      }
      return Entity;
    }

    async update(id, AvisDto:CreateAviDto) {
      const Entity = await this.avisRepository.preload({id,...AvisDto});
      if (! Entity) {
        throw new NotFoundException();
      }
      return this.avisRepository.save(Entity);
    }

    async remove(id) {
      return await this.avisRepository.softDelete(id);
    
    }
    async findWithComments(id: string): Promise<AvisEntity> {
      return this.avisRepository
        .createQueryBuilder('avis')
        .leftJoinAndSelect('avis.comments', 'comments')
        .where('avis.id = :id', { id })
        .getOne();
    }
*/
}
