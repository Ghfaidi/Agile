import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() comment: CreateCommentDto,
                  user:string,
                  avis:string
  ) {
    return this.commentsService.create(comment,user, avis);
  }

  @Get()
  findAll() {
    return this.commentsService.getAll();
  }
  

  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(id);
  }

  /*@Patch(':id')
  update(@Param('id') id: string, @Body() comment: CreateCommentDto) {
    return this.commentsService.update(id, comment);
  }*/

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(id);
  }
}
