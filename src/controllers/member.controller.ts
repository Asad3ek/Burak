import express, { Request, Response } from "express";
import { T } from "../libs/types/common"
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberService from "../models/Member.service";
import Errors, { HttpCode, Message } from "../libs/Errors";
import AuthService from "../models/Auth.service";
import { AUTH_TIMER } from "../libs/config";

const memberService = new MemberService();
const authService = new AuthService();

const memberController: T = {};

memberController.signUp = async (req: Request, res: Response) => {
    try {
        const input: MemberInput = req.body;
        const result: Member = await memberService.signUp(input),
            token = await authService.createToken(result);

        res.cookie("accessToken", token, {
            maxAge: AUTH_TIMER * 3600 * 1000,
            httpOnly: false
        });

        res.status(HttpCode.CREATED).json({ member: result, accessToken: token });
    } catch (err) {
        console.log("ERROR on Sign up", err)
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)
    }
}

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log("login Page");
        const input: LoginInput = req.body;
        const result = await memberService.login(input),
            token = await authService.createToken(result)

        res.cookie("accessToken", token, {
            maxAge: AUTH_TIMER * 3600 * 1000,
            httpOnly: false
        });

        res.status(HttpCode.OK).json({ member: result, accessToken: token });
    } catch (err) {
        console.log("ERROR on Login", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)
    }
}

memberController.verifyAuth = async (req: Request, res: Response) => {
    try {
        let member = null;
        const token = await req.cookies["accessToken"];
        if (token) member = await authService.checkAuth(token);
        if (!member)
            throw new Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENCATED);

        res.status(HttpCode.OK).json({ member: member });
    } catch (err) {
        console.log("ERROR on verifyAuth", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)
    }
}



export default memberController;