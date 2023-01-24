import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('contact')
export class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    fullName:string;
    @Column()
    email:string;
    @Column()
    phone:number;
    @Column()
    message:string;
}
