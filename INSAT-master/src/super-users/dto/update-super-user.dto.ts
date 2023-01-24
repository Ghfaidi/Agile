import { PartialType } from '@nestjs/mapped-types';
import { CreateSuperUserDto } from './create-super-user.dto';


import { IsIn,IsStrongPassword , IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength,Min,Max, IsOptional} from 'class-validator';


export class UpdateSuperUserDto extends PartialType(CreateSuperUserDto)  {

    @IsString({message:'First Name should be of type string!'})
    @IsOptional()
    @MinLength(3,{message:'First Name should be more than 3 characters!'})
    @MaxLength(15,{message:'First Name should not be more than 15 characters!'})
    firstName: string;

    @IsString({message:'Last Name should be of type string!'})
    @IsOptional()    
    @MinLength(3,{message:'Last Name should be more than 3 characters!'})
    @MaxLength(15,{message:'Last Name should not be more than 15 characters!'})
    lastName:string;

    @IsStrongPassword()
    @IsOptional()    
    password:string;

    @IsString()
    salt:string;



}



