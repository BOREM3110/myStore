import { Entity, PrimaryGeneratedColumn, OneToMany, Column, ManyToOne, JoinColumn } from "typeorm"
//import { Product } from "./Product"
import { User } from "./User"
import { AppDataSource } from "../data-source"

@Entity()
export class Cart {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    price: string
    @Column()
    name: string
    @Column()
    description: string
    @Column()
    image: string
    @Column({nullable: false})
    quantity: number
   @Column({unique: true})
   productId: number
   @Column({nullable: true})
   clientId: number
   
}

