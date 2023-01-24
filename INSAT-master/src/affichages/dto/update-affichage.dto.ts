import { PartialType } from '@nestjs/mapped-types';
import { CreateAffichageDto } from './create-affichage.dto';

export class UpdateAffichageDto extends PartialType(CreateAffichageDto) {}
