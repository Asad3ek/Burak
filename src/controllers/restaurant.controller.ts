import express, { Request, Response } from "express"
import { T } from "../libs/types/common"

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        res.send("Home Page")
    } catch (err) {
        console.log("ERROR on goHome", err)
    }
}

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        res.send("Login Page")
    } catch (err) {
        console.log("ERROR on getLogin", err)
    }
}

restaurantController.getSignUp = (req: Request, res: Response) => {
    try {
        res.send("SIgn Up Page")
    } catch (err) {
        console.log("ERROR on getSignUp", err)
    }
}

export default restaurantController