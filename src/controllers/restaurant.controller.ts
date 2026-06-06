import express, { Request, Response } from "express"
import { T } from "../libs/types/common"
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("User in goHome");
        res.send("Home Page")
    } catch (err) {
        console.log("ERROR on goHome", err)
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
restaurantController.postSignUp = async (req: Request, res: Response) => {
    try {
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.postSignUp(newMember);
        //TODO: SESSIONS AUTHENCATION

        res.send(result)
    } catch (err) {
        console.log("ERROR on PostSignUp", err)
        res.send(err);
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
restaurantController.PostLogin = async (req: Request, res: Response) => {
    try {
        console.log("PostLogin Page");
        const input: LoginInput = req.body;
        const result = await memberService.PostLogin(input)
        //TODO: SESSIONS AUTHENCATION

        res.send(result);
    } catch (err) {
        console.log("ERROR on PostLogin", err);
        res.send(err);
    }
}



export default restaurantController