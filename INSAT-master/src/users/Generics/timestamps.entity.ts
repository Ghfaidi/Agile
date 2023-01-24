import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";


export class timestampsEntity{
    @CreateDateColumn({
        update:false
    })
    createdAt:Date;
    @UpdateDateColumn()
    updatedAt:Date;
    @DeleteDateColumn()
    deletedAt:Date;
}