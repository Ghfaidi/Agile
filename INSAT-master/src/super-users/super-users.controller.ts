import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards ,UseInterceptors,UploadedFile,} from '@nestjs/common';
import { SuperUsersService } from './super-users.service';
import { CreateSuperUserDto } from './dto/create-super-user.dto';
import { UpdateSuperUserDto } from './dto/update-super-user.dto';
import { LoginCredsDto } from './dto/login-creds.dto';
import { SuperUserEntity } from './entities/super-user.entity';
import { JwtAuthGuard } from './Guards/jwt-auth.guard';
import { diskStorage } from 'multer';
import {FileInterceptor} from '@nestjs/platform-express';
import { extname } from 'path';

@Controller('super-users')

export class SuperUsersController {
  constructor(private readonly superUsersService: SuperUsersService) {}

      //upload affichage
      @Post('affichage')
      //@UseGuards(JwtAuthGuard)
      @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
          destination: './uploads/affichage',
          filename: (req, file, cb) => {
            // Generating a 32 random chars long string
            const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
            return cb(null, `${randomName}${extname(file.originalname)}`)
          },
        }),
      }))
      async uploadAffichage(@UploadedFile() file) {
        console.log(file);
        return { status: 'ok' };
      }
      //upload course
      @Post('cours')
      @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
          destination: './uploads/cours',
          filename: (req, file, cb) => {
            // Generating a 32 random chars long string
            const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
            return cb(null, `${randomName}${extname(file.originalname)}`)
          },
        }),
      }))
      @UseGuards(JwtAuthGuard)
      async uploadCours(@UploadedFile() file) {
        console.log(file);
        return { status: 'ok' };
      }

      //upload Emploie
      @Post('emploie')
      @UseGuards(JwtAuthGuard)
      @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
          destination: './uploads/emploie',
          filename: (req, file, cb) => {
            // Generating a 32 random chars long string
            const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
            return cb(null, `${randomName}${extname(file.originalname)}`)
          },
        }),
      }))
      async uploadEmploie(@UploadedFile() file) {
        console.log(file);
        return { status: 'ok' };
      }

        //register
      @Post('register')
      async register(
        @Body() userData: CreateSuperUserDto
      ):Promise<Partial<SuperUserEntity>> {
        return await this.superUsersService.register(userData)
      }

     //Login
      @Post('login')
      async login(
        @Body() Credential: LoginCredsDto
      ) {
        return await this.superUsersService.login(Credential)
      }

        //GET all users
      @Get()
      async getAllusers(): Promise<SuperUserEntity[]>{
        return await this.superUsersService.getAllusers();
      }
        //GET a user with id 
      @Get(':id')
      //@UseGuards(JwtAuthGuard)
      async getUser(
        @Param('id') id: string): Promise<SuperUserEntity>
      {
        return await this.superUsersService.getUser(id) ; 
      }
        //Update A user
      @Patch('/:id')
      //@UseGuards(JwtAuthGuard)
      async updateUser(
        @Body() user: UpdateSuperUserDto,
        @Param('id') id: string
      ): Promise<SuperUserEntity> {
        return this.superUsersService.updateUser(id,user);
      }
        //DELETE A user
      @Delete(':id')
      @UseGuards(JwtAuthGuard)
      async deleteUser(
        @Param('id') id: string
      ){
        return await this.superUsersService.deleteUser(id);
      }
        //RESTOORE A USER 
      @Get('restore/:id')
      @UseGuards(JwtAuthGuard)
      async restoreUser(
        @Param('id') id: string
      ){
        return await this.superUsersService.restoreUser(id);
      }
      
 
}
