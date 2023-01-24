import { OneToMany,Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { timestampsEntity } from "../Generics/timestamps.entity";
import { SuperUserEntity } from '../../super-users/entities/super-user.entity';
import {CommentEntity} from '../../comments/entities/comment.entity'

@Entity('avis')
export class AvisEntity extends timestampsEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    Description: string;
    @Column()
    content: string;

    @OneToMany(
        (Type) => CommentEntity,
        (comment: CommentEntity) => comment.avis,
        {
            /*on charge l'entité avec ses relation*/
            eager :true , 
            

        } 
      )
      comments: CommentEntity[];

      @ManyToOne(type => SuperUserEntity, superUser => superUser.avis)
      SuperUser: Partial<SuperUserEntity>;


}
