import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('cours')
export class CourseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    title:string;
    @Column()
    description:string;
    @Column()
    filiere:string;
    @Column()
    niveau: number;
    @Column()
    path:string;

}
