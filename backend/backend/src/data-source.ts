import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Category } from "./entity/Category"
import { Product } from "./entity/Product"
import { Cart } from "./entity/Cart"
import { Order } from "./entity/Order"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "my_database",
    synchronize: true,
    logging: false,
    entities: [User, Category, Product, Cart,  Order],
    migrations: [],
    subscribers: [],
})
