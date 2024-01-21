import { Entity, PrimaryGeneratedColumn, Column,  OneToMany, JoinColumn } from "typeorm"
import {Cart} from "./Cart";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string
    @Column({unique: true})
    email: string
    @Column()
    password: string
    @Column()
    isAdmin: boolean
    
}


