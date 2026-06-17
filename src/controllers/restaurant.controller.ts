import express, { NextFunction, Request, Response } from "express"
import { T } from "../libs/types/common"
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";


const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("User in goHome");
        res.render("home")
    } catch (err) {
        console.log("ERROR on goHome", err);
        res.redirect("/admin");
    }
}

restaurantController.getSignUp = (req: Request, res: Response) => {
    try {
        console.log("User in getSignUp Page");
        res.render("signup")
    } catch (err) {
        console.log("ERROR on getSignUp", err)
        res.redirect("/admin");
    }
}
restaurantController.processSignUp = async (req: AdminRequest, res: Response) => {
    try {
        const file = req.file
        if (!file)
            throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);

        const newMember: MemberInput = req.body;
        newMember.memberImage = file?.path;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignUp(newMember);
        //SESSIONS AUTHENCATION
        req.session.member = result;
        req.session.save(function () {
            res.redirect("/admin/product/all");
        })

    } catch (err) {
        console.log("ERROR on PostSignUp", err)
        const message =
            err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(
            `<script> alert("${message}" window.location.replace(admin/SignUp))</script>`)
    }
}

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("User in getLogin Page");
        res.render("login")
    } catch (err) {
        console.log("ERROR on getLogin", err);
        res.redirect("/admin");
    }
}
restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log("PostLogin Page");
        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input)
        //TODO: SESSIONS AUTHENCATION
        req.session.member = result;
        req.session.save(function () {
            res.redirect("/admin/product/all");
        })


    } catch (err) {
        console.log("ERROR on PostLogin", err);
        const message =
            err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(
            `<script> alert("${message}" window.location.replace(admin/Login))</script>`)
    }
}

restaurantController.logOut = async (req: AdminRequest, res: Response) => {
    try {
        console.log("logOut Page");
        req.session.destroy(function () {
            res.redirect("/admin");
        })

    } catch (err) {
        console.log("ERROR on logOut", err);
        res.redirect("/admin");
    }
}


restaurantController.getUsers = async (req: Request, res: Response) => {
    try {
        console.log("getUsers");
        const result = await memberService.getUsers();

        res.render("user", { data: result });

    } catch (err) {
        console.log("ERROR on getUsers", err);
        res.redirect("/admin/Login");

    }
}

restaurantController.updateChosenUser = async (req: Request, res: Response) => {
    try {
        console.log("updateChosenUser");
        const result = await memberService.updateChosenUser(req.body);

        res.status(HttpCode.OK).json({ data: result });
    } catch (err) {
        console.log("ERROR on updateChosenUser", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        res.redirect("/admin/Login");

    }
}


// test => checkAuthSession
restaurantController.checkAuthSession = async (req: AdminRequest, res: Response) => {
    try {
        console.log("checkAuthSession Page");
        if (req.session.member) res.send(`<script> alert("${req.session.member.memberNick}")</script>`);
        else res.send(`<script>alert ("${Message.NOT_AUTHENCATED}") </script>`);
    } catch (err) {
        console.log("ERROR on  checkAuthSession", err);
        res.send(err);
    }
}

restaurantController.verifyRestaurant = (
    req: AdminRequest,
    res: Response,
    next: NextFunction) => {

    if (req.session?.member?.memberType === MemberType.RESTAURANT) {
        req.member = req.session.member;
        next();
    } else {
        const message = Message.NOT_AUTHENCATED
        res.send(
            `<script>alert ("${message}", window.location.replace('/admin/login')) </script>`
        );
    }
}



export default restaurantController