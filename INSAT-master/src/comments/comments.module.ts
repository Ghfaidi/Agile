import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './entities/comment.entity';
import { AvisEntity } from 'src/avis/entities/avi.entity';
import { UserEntity } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity]),TypeOrmModule.forFeature([AvisEntity]),TypeOrmModule.forFeature([UserEntity])],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
