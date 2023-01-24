import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('emploie')
export class EmployEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    filiere:string;
    @Column()
    niveau: number;
    @Column()
    path:string;
}
