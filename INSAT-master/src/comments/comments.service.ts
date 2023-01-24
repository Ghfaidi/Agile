import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ConflictException, NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,createQueryBuilder } from 'typeorm';
import {CommentEntity} from './entities/comment.entity'
import { UserEntity } from 'src/users/entities/user.entity';
import { AvisEntity } from 'src/avis/entities/avi.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(AvisEntity)
    private avisRepository: Repository<AvisEntity>
  ) {}

  async create(comment: CreateCommentDto, user:string, avis:string) {
      const User = await this.userRepository.findOne({where: {id: user}});
      const Avis = await this.avisRepository.findOne({where: {id: avis}});
      if (!User || !Avis) {
        throw new NotFoundException('Can not post comment');
      }else{
        try {
            const Comment = await this.commentRepository.create({       
            content: comment.content,
            user: { id: User.id },
            avis: {id : Avis.id}
          });
          console.log(Comment);
            return this.commentRepository.save(Comment);
            
          } catch{
            throw new ConflictException('comment can not be created');
          }
      }
  }


  async getAll() {
    try {
      const comment = await this.commentRepository.find();
      console.log(comment);
      return await this.commentRepository.find();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

/*
  findAll(): Promise<CommentEntity[]> {
    return this.commentRepository.find();
  }*/

  async findOne(id): Promise<CommentEntity> {
    
    const Entity = await this.commentRepository.findOne({
      where: {
        id:id}
      });
    if (! Entity) {
      throw new NotFoundException();
    }
    return Entity;
  }

  /*async update(id, Comment: CreateCommentDto) {
    const Entity = await this.commentRepository.preload({id,...Comment});
    if (! Entity) {
      throw new NotFoundException();
    }
    return this.commentRepository.save(Entity);
  }*/
  
  async remove(id) {
    return await this.commentRepository.softDelete(id);

  }
}
