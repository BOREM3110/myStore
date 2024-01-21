import { Entity, PrimaryColumn, OneToMany, Column } from "typeorm"
import { Cart } from "./Cart"

@Entity()
export class Product {

    @PrimaryColumn()
    id: number

    @Column()
    name: string

    @Column()
   description: string
    @Column()
    price: string
    @Column()
    countInStock: number
    @Column()
    categoryId: number
    @Column()
    image: string
   };
