import * as express  from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes/UserRoute";
import { categoryRoute } from "./routes/categoryRoute";
import { cartRoutes } from "./routes/cartRoutes";
import { orderRoutes } from "./routes/orderRoutes";
import { createProxyMiddleware } from 'http-proxy-middleware';
import { User } from "./entity/User"
import { categories, products } from "./data"
import { Product } from "./entity/Product"
import { Category } from "./entity/Category";
const passport = require("passport");
import { productsRoutes } from "./routes/productRoute";
import { Cart } from "./entity/Cart";
import multer from "multer";







AppDataSource.initialize().then(async () => {

    // create express app
    const app = express();
    app.use(bodyParser.json());
    
app.use(express.urlencoded({ extended: false
}));
 

//use express static to upload images
app.use(express.static("\public"));
  
//use express static for the slides image of carousel
app.use(express.static("slides"));

let allRoutes = [Routes, categoryRoute, productsRoutes, orderRoutes, cartRoutes];
    allRoutes.forEach((route)=> {
        route.forEach(route => {
            (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
                const result = (new (route.controller as any))[route.action](req, res, next)
                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)
    
                } else if (result !== null && result !== undefined) {
                    res.json(result)
                }
            })
        })
    })
const port = process.env.PORT || 5000;
    // setup express app here
    // ...
    app.use('/api', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));

    

    // start express server
    app.listen(port)

    const userRepository = AppDataSource.getRepository(User);
    const cartRepository = AppDataSource.getRepository(Cart);
    
    

    
    



   
    //Get the productRepository
   //const productRepository = AppDataSource.getRepository(Product)
    //await productRepository.clear();
    //await AppDataSource
    //.createQueryBuilder()
    //.insert()
    //.into(Product)
    //.values(products)
    //.execute()

  

    //Get the productRepository
   const categoryRepository = AppDataSource.getRepository(Category)
   await categoryRepository.clear();
   await AppDataSource
   .createQueryBuilder()
   .insert()
   .into(Category)
   .values(categories)
   .execute()

/*
  await userRepository.clear();
    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            firstName: "Phantom",
            lastName: "Assassin",
           email: "phantomAss@mail.com",
           password: "1235478t",
           isAdmin: true
        })
    )
*/
    console.log(`Express server has started on port ${port}. Open http://localhost:${port} to see results`)

}).catch(error => console.log(error))
