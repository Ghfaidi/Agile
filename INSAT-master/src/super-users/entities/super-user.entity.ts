
import { OneToOne, Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { timestampsEntity } from "../Generics/timestamps.entity";
import { AvisEntity } from '../../avis/entities/avi.entity';


@Entity('superuser')
export class SuperUserEntity extends timestampsEntity {
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

    @Column()
    role:string;

    @OneToMany(type => AvisEntity, avis =>  avis.SuperUser)
    avis: AvisEntity[];


}