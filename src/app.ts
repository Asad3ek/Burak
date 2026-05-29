import express, { urlencoded } from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";

/** 1 - ENTERENCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(urlencoded({ extended: true }))
app.use(express.json());


/** 2 - SESSION **/

/** 3 - VIEW **/
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs")

/** 4 - ROUTERS **/
app.use("/admin", routerAdmin)
app.use("/", router)

export default app;