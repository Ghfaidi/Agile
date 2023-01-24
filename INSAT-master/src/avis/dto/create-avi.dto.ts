import { IsIn,Matches,IsStrongPassword , IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength,Min,Max} from 'class-validator';

export class CreateAviDto {

    @IsNotEmpty({message:'AVIS Description should not be empty!'})
    @IsString({message:'AVIS Description should be of type string!'})
    @MinLength(3,{message:'AVIS Description should be more than 3 characters!'})
    @MaxLength(30,{message:'AVIS Description should not be more than 30 characters!'})
    Description: string;

    @IsNotEmpty({message:'AVIS content should not be empty!'})
    @IsString({message:'AVIS content should be of type string!'})
    @MinLength(3,{message:'AVIS content should be more than 3 characters!'})
    @MaxLength(100,{message:'AVIS content should not be more than 100 characters!'})
    content: string;
}
