import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('affichage')
export class AffichageEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    filiere:string;
    @Column()
    niveau: number;
    @Column()
    path:string;
}
