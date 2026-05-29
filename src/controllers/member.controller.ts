import express, { Request, Response } from "express";
import { T } from "../libs/types/common"

const memberController: T = {};
memberController.goHome = (req: Request, res: Response) => {
    try {
        res.send("Home Page");
    } catch (err) {
        console.log("ERROR on goHome", err);
    }
}

memberController.getLogin = (req: Request, res: Response) => {
    try {
        res.send("Login Page");
    } catch (err) {
        console.log("ERROR on getLogin", err);
    }
}

memberController.getSignUp = (req: Request, res: Response) => {
    try {
        res.send("Sign Up Page")
    } catch (err) {
        console.log("ERROR on Sign up Page", err)
    }
}


export default memberController;