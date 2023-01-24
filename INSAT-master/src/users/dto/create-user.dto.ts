import { IsIn,Matches,IsStrongPassword , IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength,Min,Max} from 'class-validator';


export class CreateUserDto {

    @IsString({message:'First Name should be of type string!'})
    @IsNotEmpty({message:'First Name should not be empty!'})
    @MinLength(3,{message:'First Name should be more than 3 characters!'})
    @MaxLength(15,{message:'First Name should not be more than 15 characters!'})
    firstName: string;

    @IsString({message:'Last Name should be of type string!'})
    @IsNotEmpty({message:'Last Name should not be empty!'})
    @MinLength(3,{message:'Last Name should be more than 3 characters!'})
    @MaxLength(15,{message:'Last Name should not be more than 15 characters!'})
    lastName:string;

    @IsNotEmpty({message:'Email should not be empty!'})
    @IsEmail()
    @Matches(/@insat\.ucar\.tn$/)
    email:string;

    @IsNumber()
    @Min(10000000,{message:'CIN should be 8 digits!'}) 
    @Max(99999999,{message:'CIN should be 8 digits!'})
    @IsNotEmpty({message:'CIN should not be empty!'})
    cin:number;

    @IsStrongPassword()
    @IsNotEmpty({message:'Password should not be empty!'})
    password:string;

    //@IsString()
    //salt:string;


    @IsNotEmpty({message:'Filiere should not be empty!'})
    @IsIn(['MPI', 'CBA', 'RT', 'GL', 'IIA', 'IMI'])
    filiere:string;

    @IsNotEmpty({message:'Niveau should not be empty!'})
    @IsNumber()
    @Min(1)
    @Max(5)
    niveau:number;

    role: string = 'student';


}


