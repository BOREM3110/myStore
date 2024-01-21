import { OrderController } from "../controller/OrderController"


export const orderRoutes = [{
    method: "get",
    route: "/api/order",
    controller: OrderController,
    action: "all"
}, {
    method: "get",
    route: "/api/order/:id",
    controller: OrderController,
    action: "one"
}, {
    method: "post",
    route: "/api/order/add_order",
    controller: OrderController,
    action: "save"
}, 

{
    method: "delete",
    route: "/api/order/:id",
    controller: OrderController,
    action: "remove"
}]