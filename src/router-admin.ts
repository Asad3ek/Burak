import express from "express"
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";

const routerAdmin = express.Router();

/** Restaurant Routers */
routerAdmin.get("/", restaurantController.goHome);

routerAdmin
    .get("/Login", restaurantController.getLogin)
    .post("/Login", restaurantController.PostLogin);



routerAdmin
    .get("/SignUp", restaurantController.getSignUp)
    .post("/SignUp", restaurantController.postSignUp)
    .get("/Logout", restaurantController.logOut)

//test API
routerAdmin.get("/check-me", restaurantController.checkAuthSession)


/** Product Routers */
routerAdmin
    .get("/product/all",
        restaurantController.verifyRestaurant,
        productController.getAllProducts
    )
    .post("/product/create",
        restaurantController.verifyRestaurant,
        productController.createNewProduct)
    .post("/product/:id",
        restaurantController.verifyRestaurant,
        productController.updateChosenProduct)


/** User Routers */

export default routerAdmin; 