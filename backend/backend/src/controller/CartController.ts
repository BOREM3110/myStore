import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Cart } from "../entity/Cart"

export class CartController {

    private cartRepository = AppDataSource.getRepository(Cart)

    async all(request: Request, response: Response, next: NextFunction) {
        const cart = await this.cartRepository.find()
       
          return cart; 
        
        }
       
        async add(request: Request, response: Response, next: NextFunction) {
            const  productId = parseInt(request.params.id);
            
           
            
            const cartClient = await this.cartRepository.findOneBy({ productId });
           console.log(request.params)
            
            if(cartClient) {
               cartClient.quantity += 1;
               
                await this.cartRepository.save(cartClient);
                const allCart = await this.cartRepository.find();
                return ({msg: "Cart by productId updated successfully!", cart: allCart});
            
           
            
            }
            return "cart with this productId doesn't exist!"
        }

    

    async save(request: Request, response: Response, next: NextFunction) {
        try {
        const { price, name, description, image} = request.body;
        const {quantity} = request.body;
        
        const allCart = await this.cartRepository.find()
        const productId = parseInt(request.body.productId);
        const cartClient = await this.cartRepository.findOneBy({ productId });
       
        
        if(cartClient) {
           
            await this.cartRepository.update({productId}, {quantity});
            return ("Cart by productId updated successfully!");
        }

    if(quantity > 0 ) {
        
      const cart = new Cart();
      cart.name = name;
      cart.description = description;
      cart.image = image;
      cart.price = price;
      cart.quantity = quantity;
      cart.productId = productId;
            
         await this.cartRepository.save(cart)
         return {status: 200, msg: "success saving cart"}
    }
}catch(error) {
    console.log("the error is: " + error);
}
}


async current(request: Request, response: Response, next: NextFunction) {
    try {
    const { price, name, description, image} = request.body;
    const {quantity} = request.body;
    
    const allCart = await this.cartRepository.find()
    const productId = parseInt(request.body.productId);
    const cartClient = await this.cartRepository.findOneBy({ productId });
   
    
    if(cartClient) {
       
        await this.cartRepository.update({productId}, {quantity});
        return ("Cart by productId updated successfully!");
    }

if(quantity > 0 ) {
    
  const cart = new Cart();
  cart.name = name;
  cart.description = description;
  cart.image = image;
  cart.price = price;
  cart.quantity = quantity;
  cart.productId = productId;
        
     await this.cartRepository.save(cart)
     return {status: 200, msg: "success saving cart"}
}
}catch(error) {
console.log("the error is: " + error);
}
}



    //Controller remove user by id
    async remove(request: Request, response: Response, next: NextFunction) {
        const productId = parseInt(request.params.id);
        let resp;
        let cartToRemove = await this.cartRepository.findOneBy({ productId });
        
          
       if (!cartToRemove) {
        const allCarts = await this.cartRepository.find();
            return {msg: "this cart not exist", cart: allCarts}
           
        }  else {
            
            if(cartToRemove.quantity === 1 || cartToRemove.quantity < 0 || cartToRemove.quantity === 0) {
                await this.cartRepository.remove(cartToRemove)
              
                    const allCarts =  await this.cartRepository.find()
                    return {msg : "Cart has been removed successfully!", cart: allCarts

                   
        }
     
        }
        if(cartToRemove.quantity > 1) {
            const cart = await this.cartRepository.find();
        /* const allCart = await cart.map((x)=> {
            if(x.id === cartToRemove.id) {  
                return {...cartToRemove, quantity: cartToRemove.quantity-=1};
           
           return x;
            }
         })*/;
         cartToRemove.quantity -= 1;
        await this.cartRepository.save(cartToRemove)
        const allCart = await this.cartRepository.find()
        return {msg: "success minimize quantity value!", cart: allCart};
        }
       
    }
    
    }
    
    }
