import express, { Request, Response } from "express"
import { T } from "../libs/types/common"
import MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("User in goHome");
        res.send("Home Page")
    } catch (err) {
        console.log("ERROR on goHome", err)
    }
}


restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("User in getLogin Page");
        res.send("Login Page")
    } catch (err) {
        console.log("ERROR on getLogin", err)
    }
}
restaurantController.PostLogin = (req: Request, res: Response) => {
    try {
        console.log("PostLogin Page");
        res.send("PostLogin Page")
    } catch (err) {
        console.log("ERROR on PostLogin", err)
    }
}


restaurantController.getSignUp = (req: Request, res: Response) => {
    try {
        console.log("User in getSignUp Page");
        res.send("SIgn Up Page")
    } catch (err) {
        console.log("ERROR on getSignUp", err)
    }
}
restaurantController.PostSignUp = (req: Request, res: Response) => {
    try {
        console.log("PostSignUp Page");
        res.send("PostSignUp Page")
    } catch (err) {
        console.log("ERROR on PostSignUp", err)
    }
}

export default restaurantController