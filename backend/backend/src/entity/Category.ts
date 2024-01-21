import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
//import { Product } from "./Product";

@Entity()
export class Category {

    @PrimaryColumn()
    id: number

    @Column()
    name: string;

    @Column()
    description: string;
    @Column({nullable: true})
    parentId: number;

   @Column({
        type: 'jsonb',
        name: 'children',
        array: false,
        default: () => "'[]'",
        nullable: false,
    })
    public children!: Array<{id: number,name: string, description: string, parentId: number  }>;

    //@OneToMany(() => Product, (product) => product.categoryId) // note: we will create categoryId property in the Product class below
    //products: Product[]
   

}
