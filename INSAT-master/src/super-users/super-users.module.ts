import { Module } from '@nestjs/common';
import { SuperUsersService } from './super-users.service';
import { SuperUsersController } from './super-users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuperUserEntity } from './entities/super-user.entity';
import { PassportModule } from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt'
import * as dotenv from 'dotenv';
import { JwtStrategy } from './strategy/passport-jwt.strategy';
import { AvisEntity } from 'src/avis/entities/avi.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([SuperUserEntity]),TypeOrmModule.forFeature([AvisEntity]),
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
  controllers: [SuperUsersController],
  providers: [SuperUsersService]
})
export class SuperUsersModule {}
