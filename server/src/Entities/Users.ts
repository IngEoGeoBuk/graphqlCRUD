import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {
    @PrimaryColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    username!: string;
    
    @Column()
    password!: string;

}