import express, { Request, Response } from "express"
import { T } from "../libs/types/common"
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";


const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("User in goHome");
        res.render("home")
    } catch (err) {
        console.log("ERROR on goHome", err)
    }
}

restaurantController.getSignUp = (req: Request, res: Response) => {
    try {
        console.log("User in getSignUp Page");
        res.render("signup")
    } catch (err) {
        console.log("ERROR on getSignUp", err)
    }
}
restaurantController.postSignUp = async (req: AdminRequest, res: Response) => {
    try {
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.postSignUp(newMember);
        //TODO: SESSIONS AUTHENCATION
        req.session.member = result;
        req.session.save(function () {
            res.send(result);
        })

    } catch (err) {
        console.log("ERROR on PostSignUp", err)
        res.send(err);
    }
}

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("User in getLogin Page");
        res.render("login")
    } catch (err) {
        console.log("ERROR on getLogin", err)
    }
}
restaurantController.PostLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log("PostLogin Page");
        const input: LoginInput = req.body;
        const result = await memberService.PostLogin(input)
        //TODO: SESSIONS AUTHENCATION
        req.session.member = result;
        req.session.save(function () {
            res.send(result);
        })


    } catch (err) {
        console.log("ERROR on PostLogin", err);
        res.send(err);
    }
}



export default restaurantController