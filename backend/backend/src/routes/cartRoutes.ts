import { CartController } from "../controller/CartController"


export const cartRoutes = [{
    method: "get",
    route: "/api/carts",
    controller: CartController,
    action: "all"
}, {
    method: "get",
    route: "/api/carts/:id",
    controller: CartController,
    action: "one"
}, {
    method: "post",
    route: "/api/carts/add_to_cart",
    controller: CartController,
    action: "save"
}, 
, {
    method: "post",
    route: "/api/carts/add_to_cart/:id",
    controller: CartController,
    action: "add"
},
{
    method: "delete",
    route: "/api/carts/:id",
    controller: CartController,
    action: "remove"
}]