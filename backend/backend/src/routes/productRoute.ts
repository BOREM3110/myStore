import {ProductController} from "../controller/ProductController";

export const productsRoutes = [{
  method: "get",
  route: "/api/products",
  controller: ProductController,
  action: "all"
}, {
  method: "get",
  route: "/api/products/:id",
  controller: ProductController,
  action: "one"
}, {
  method: "post",
  route: "/api/products",
  controller: ProductController,
  action: "save"
},
{
  method: "get",
  route: "/api/products/categories/:categoryId",
  controller: ProductController,
  action: "extract"
},
{
  method: "put",
  route: "/api/products/:id",
  controller: ProductController,
  action: "modify"
},
{
  method: "delete",
  route: "/api/products/:id",
  controller: ProductController,
  action: "remove"
}]; 