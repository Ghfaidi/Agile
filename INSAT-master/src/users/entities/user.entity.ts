import { Entity,OneToMany, Column, PrimaryGeneratedColumn } from 'typeorm';
import { timestampsEntity } from "../Generics/timestamps.entity";
import {CommentEntity} from '../../comments/entities/comment.entity'


@Entity('user')
export class UserEntity extends timestampsEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 15 })
    firstName: string;

    @Column("varchar", { length: 15 })
    lastName:string;

    @Column({update:false, unique: true })
    email:string;

    @Column({ type: "int", width: 8 , update:false, unique: true})
    cin:number;

    @Column()
    password:string;

    @Column()
    salt:string;

    @Column("varchar", { length: 5 })
    filiere:string;

    @Column({ type: "int", width: 1 })
    niveau:number;
    
    @Column()
    role:string;

    @OneToMany(
        (Type) => CommentEntity,
        (comment: CommentEntity) => comment.user,
        {
            /*on charge l'entité avec ses relation*/
            //eager :true 
        } 
      )
      comments: CommentEntity [];

}
