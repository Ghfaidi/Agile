import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Repository } from 'typeorm';
import { Contact } from './entities/contact.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { ConflictException, NotFoundException } from '@nestjs/common/exceptions';
@Injectable()
export class ContactsService {
  constructor(
    
    @InjectRepository(Contact)
    private contactRepository : Repository<Contact>
  ){}
  async create(createContactDto: CreateContactDto) {
    
    const Message = await this.contactRepository.create({       
      message: createContactDto.message});
      console.log(Message);
      return this.contactRepository.save(Message);
    
}

  async findAll() {

    try {
      const avis = await this.contactRepository.find();
      console.log(avis);
      return await this.contactRepository.find();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  

  async findOne(id: string) {
    const msg= await this.contactRepository.find({ 
      where: { 
        id: id
      } 
    });
    
    return msg;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const Entity = await this.contactRepository.preload({id,...updateContactDto});
    if (! Entity) {
      throw new NotFoundException();
    }
    return this.contactRepository.save(Entity);
  }

  /*async remove(id: string) {
    return await this.contactRepository.softDelete(id);
    
  }*/
}
