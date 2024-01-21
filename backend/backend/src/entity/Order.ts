import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from "typeorm"
//import { Product } from "./Product";


@Entity()
export class  Order {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
   userId: string
 
    @Column()
    total: string
    @Column()
    city: string
    @Column()
    postalCode: string
   @Column()
    phone: string
    @Column({nullable: false})
    address: string
    @Column({
        type: 'jsonb',
        name: 'carts',
        array: false,
        default: () => "'[]'",
        nullable: false,
    })
    public carts!: Array<{productId: number,name: string, description: string, image: string, quantity: number, price: number  }>;
   
}