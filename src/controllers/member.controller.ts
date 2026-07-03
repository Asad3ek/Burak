import express, { Request, Response } from "express";
import { T } from "../libs/types/common"
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberService from "../models/Member.service";
import Errors from "../libs/Errors";
import AuthService from "../models/Auth.service";

const memberService = new MemberService();
const authService = new AuthService();

const memberController: T = {};

memberController.signUp = async (req: Request, res: Response) => {
    try {
        const input: MemberInput = req.body;
        const result: Member = await memberService.signUp(input),
            token = await authService.createToken(result);
        console.log("token => signUP:", token);
        res.json({ member: result });
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
        //TODO: TOOKENS AUTHENCATION
        console.log("token===>:", token)

        res.json({ member: result });
    } catch (err) {
        console.log("ERROR on Login", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)
    }
}



export default memberController;