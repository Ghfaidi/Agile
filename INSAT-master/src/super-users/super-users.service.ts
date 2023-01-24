import { Injectable,BadRequestException } from '@nestjs/common';
import { CreateSuperUserDto } from './dto/create-super-user.dto';
import { UpdateSuperUserDto } from './dto/update-super-user.dto';
import {JwtService} from '@nestjs/jwt'
import { SuperUserEntity } from './entities/super-user.entity';
import { Repository,createQueryBuilder } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ConflictException, NotFoundException } from '@nestjs/common/exceptions';
import * as bcrypt from 'bcrypt'
import { LoginCredsDto } from './dto/login-creds.dto';
import { validate, validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class SuperUsersService {
  constructor(
    @InjectRepository(SuperUserEntity)
    private userRepository: Repository<SuperUserEntity>,
    private jwtService: JwtService
  ){
  }


  //Register
  async register(userData: CreateSuperUserDto ): Promise<Partial<SuperUserEntity>> {
    // Validate the DTO instance
    const userDataDto = plainToClass(CreateSuperUserDto, userData);
    //await validateOrReject(userDataDto);
    //console.log(userData); 
    const errors = await validate(userDataDto);
    //console.log(errors)

    if (errors.length > 0) {
      throw new BadRequestException(errors);
  }
    const user = this.userRepository.create({
      ...userDataDto
    });
    user.salt= await bcrypt.genSalt();
    user.password= await bcrypt.hash(user.password, user.salt);
    try {
      await this.userRepository.save(user);
    } catch{
      throw new ConflictException('User can not be created');
    }
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
}
  //LOGIN
  async login(credentials: LoginCredsDto){
    const {email,password} = credentials; 
    const user = await this.userRepository.createQueryBuilder("user")
      .where("user.email= :email", { email }).getOne();

    console.log(user);
    if (!user) {
        throw new NotFoundException('email or password not correct');
    }
    const hashedPassword= await bcrypt.hash(password, user.salt);
    if (hashedPassword==user.password){
      const payload={
        id: user.id
      };

      const jwt= await this.jwtService.sign(payload);
      return {
        "access_token": jwt,
        "status" : 1,
        "id": user.id
      };
    }else{
      throw new NotFoundException('email or password not correct');
    }
  }



    //GET all users
    async getAllusers():Promise<SuperUserEntity[]>{
      return await this.userRepository.find()
    }
    //UPDATE A User
    async updateUser(id: string ,user: UpdateSuperUserDto): Promise<SuperUserEntity> {
      const updatedUser= await this.userRepository.preload({
        id,
        ...user
      })
      if(!updatedUser){
        throw new NotFoundException("User doesn't exist");
      }
      return await this.userRepository.save(updatedUser)
    }
    //DELETE a user
    async deleteUser(id:string){
      return await this.userRepository.softDelete(id);
    }
    //RESTOORE A USER 
    async restoreUser(id:string){
        return this.userRepository.restore(id);
    }
     //GET a user
    async getUser(id: string): Promise<SuperUserEntity> {
      const qb = this.userRepository.createQueryBuilder("user");

      return await qb.where("user.id = :id", { id: id }).getOne();
    }
   


}
