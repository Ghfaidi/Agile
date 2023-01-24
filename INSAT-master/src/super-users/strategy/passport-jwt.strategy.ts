import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { SuperUserEntity } from '../entities/super-user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PayloadInterface } from '../interfaces/payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService : ConfigService, 
    @InjectRepository(SuperUserEntity)
    private superUserRepository: Repository<SuperUserEntity>
  ) {
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: 'TestSecretKey' //configService.get('SECRET'),
      });
  }

  async validate(payload: PayloadInterface) {
    const user = await this.superUserRepository.findOne({ where: { id: payload.id } });
    console.log(user);
    if (user){
        const {password,salt,...result} = user;
        return result;
    }else{
        throw new UnauthorizedException();
    }

  }
}