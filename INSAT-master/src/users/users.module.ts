import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt'
import * as dotenv from 'dotenv';
import { JwtStrategy } from './strategy/passport-jwt.strategy';

dotenv.config()

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity]),
          PassportModule.register({
            defaultStrategy: 'jwt'
          }),
          JwtModule.register({
            secret: process.env.SECRET,
            signOptions: {
              expiresIn:3600
            }
          })
          
],
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy]
})
export class UsersModule {}
