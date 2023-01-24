import { PartialType } from '@nestjs/mapped-types';
import { CreateSuperUserDto } from './create-super-user.dto';
import { IsIn,Matches,IsStrongPassword , IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength,Min,Max} from 'class-validator';


export class LoginCredsDto extends PartialType(CreateSuperUserDto) {

    @IsNotEmpty({message:'Email should not be empty!'})
    @IsEmail()
    @Matches(/@insat\.ucar\.tn$/)
    email:string;

    @IsNotEmpty({message:'Password should not be empty!'})
    password:string;
}