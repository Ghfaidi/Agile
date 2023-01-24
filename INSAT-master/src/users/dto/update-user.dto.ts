import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

import { IsIn,IsStrongPassword , IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength,Min,Max, IsOptional} from 'class-validator';


export class UpdateUserDto extends PartialType(CreateUserDto) {

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


    @IsOptional()    
    @IsIn(['MPI', 'CBA', 'RT', 'GL', 'IIA', 'IMI'])
    filiere:string;

    @IsOptional()    
    @IsNumber()
    @Min(1)
    @Max(5)
    niveau:number;


}



