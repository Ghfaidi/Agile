import { Controller, Get, Post, Body, Patch, Param, Delete , UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { LoginCredsDto } from './dto/login-creds.dto';
import { JwtAuthGuard } from './Guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(
    private  usersService: UsersService
    ) {}

  //register
  @Post('register')
  async register(
    @Body() userData: CreateUserDto
  ):Promise<Partial<UserEntity>> {
    return await this.usersService.register(userData)
  }

    //Login
    @Post('login')
    async login(
      @Body() Credential: LoginCredsDto
    ) {
      return await this.usersService.login(Credential)
    }


  //GET all users
  @Get()
  async getAllusers(): Promise<UserEntity[]>{
    return await this.usersService.getAllusers();
  }
  //ADD a user
  @Post()
  async addUser(@Body() user: CreateUserDto): Promise<UserEntity> {
    return this.usersService.addUser(user);
  }

  //GET a user with id 
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getUser(
    @Param('id') id: string): Promise<UserEntity>
   {
    return await this.usersService.getUser(id) ; 
  }

  //Update A user
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateUser(
    @Body() user: UpdateUserDto,
    @Param('id') id: string
  ): Promise<UserEntity> {
    return this.usersService.updateUser(id,user);
  }

  //DELETE A user
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteUser(
    @Param('id') id: string
  ){
    return await this.usersService.deleteUser(id);
  }
  //RESTOORE A USER 
  @Get('restore/:id')
  @UseGuards(JwtAuthGuard)
  async restoreUser(
    @Param('id') id: string
  ){
    return await this.usersService.restoreUser(id);
  }

  




}
