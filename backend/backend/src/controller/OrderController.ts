import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Order } from "../entity/Order";

export class OrderController {

    private orderRepository = AppDataSource.getRepository(Order)

    async all(request: Request, response: Response, next: NextFunction) {
        return await this.orderRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
     const id = parseInt(request.params.id);
        

        const order = await this.orderRepository.findOne({
            where: { id }
        })

        if (!order) {
            return "unregistered order"
        }
        return order
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { userId, carts, total, city, postalCode, phone, address} = request.body;
        const orders = await this.orderRepository.find();
        let id = 1;
        const lastOrder = await this.orderRepository.findOne({where: {}, order:{id: "DESC"}});
        if(lastOrder === null) {
            lastOrder.id = 1
        }
        id+= lastOrder.id
       
       const newOrder = new Order();
        
        newOrder.id = id;
           newOrder.userId = userId;
            newOrder.carts = carts;
           newOrder.total = total;
            newOrder.city = city;
            newOrder.postalCode = postalCode;
            newOrder.phone = phone;
            newOrder.address = address;
            
        const savedOrder = await this.orderRepository.save(newOrder);
            console.log("Your order is saved successfully! ")
        return {msg: `success! your order have saved successfully!`, order: savedOrder }; 
    }
    
    //Controller remove product by id
    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let orderToRemove = await this.orderRepository.findOneBy({ id })

        if (!orderToRemove) {
            return {msg:"this order not exist", order: {}}
        }

        await this.orderRepository.remove(orderToRemove)
        const orders = await this.orderRepository.find();
        return {msg:"order has been removed successfully!", orders: orders};
    }

}