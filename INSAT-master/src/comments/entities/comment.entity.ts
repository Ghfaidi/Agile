import {ManyToOne, OneToOne,Entity, Column, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { timestampsEntity } from "../Generics/timestamps.entity";
import { UserEntity } from '../../users/entities/user.entity';
import { AvisEntity } from '../../avis/entities/avi.entity';

@Entity('comment')
export class CommentEntity extends timestampsEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    content: string;

    @OneToOne(
        (Type) => AvisEntity,
        (avis: AvisEntity) => avis.comments,
        {} 
      )
      @JoinColumn()
      avis: Partial<AvisEntity>;

    @OneToOne(
        (Type) => UserEntity,
        (user: UserEntity) => user.comments,
        {
          /*on charge l'entité avec ses relation*/
          eager :true , 
          
        } 
      )
      @JoinColumn()
      user: Partial<UserEntity>;
}
