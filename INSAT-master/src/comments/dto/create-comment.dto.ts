import { IsIn,Matches,IsStrongPassword , IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength,Min,Max} from 'class-validator';

export class CreateCommentDto {

    @IsNotEmpty({message:'AVIS content should not be empty!'})
    @IsString({message:'AVIS content should be of type string!'})
    @MinLength(3,{message:'AVIS content should be more than 3 characters!'})
    @MaxLength(100,{message:'AVIS content should not be more than 100 characters!'})
    content: string;
}
