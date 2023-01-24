import { IsIn,Matches,IsStrongPassword , IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength,Min,Max} from 'class-validator';
export class CreateContactDto {
    @IsNotEmpty({message:'Message should not be empty!'})
    @IsString({message:'Message content should be of type string!'})
    @MinLength(3,{message:'Message content should be more than 3 characters!'})
    @MaxLength(100,{message:'Message content should not be more than 100 characters!'})
    message: string;
}
