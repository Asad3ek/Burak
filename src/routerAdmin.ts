import express from "express"
import restaurantController from "./controllers/restaurant.controller";

const routerAdmin = express.Router();

routerAdmin.get("/", restaurantController.goHome);
routerAdmin.get("/Login", restaurantController.getLogin);
routerAdmin.get("/SignUp", restaurantController.getSignUp);


export default routerAdmin;