import { UserController } from "../controller/UserController"

export const Routes = [{
    method: "get",
    route: "/api/users",
    controller: UserController,
    action: "all"
}, {
    method: "post",
    route: "/api/users/login",
    controller: UserController,
    action: "login"
}, {
    method: "post",
    route: "/api/users/register",
    controller: UserController,
    action: "register"
},
{
    method: "post",
    route: "/api/users/current",
    controller: UserController,
    action: "current"
},
{
    method: "delete",
    route: "/api/users/:id",
    controller: UserController,
    action: "remove"
}]