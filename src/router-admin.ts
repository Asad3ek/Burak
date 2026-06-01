import express from "express"
import restaurantController from "./controllers/restaurant.controller";

const routerAdmin = express.Router();

/** Restaurant Routers */
routerAdmin.get("/", restaurantController.goHome);

routerAdmin
    .get("/Login", restaurantController.getLogin)
    .post("/Login", restaurantController.PostLogin);

routerAdmin
    .get("/SignUp", restaurantController.getSignUp)
    .post("/SignUp", restaurantController.postSignUp);

/** Product Routers */

/** User Routers */

export default routerAdmin; 