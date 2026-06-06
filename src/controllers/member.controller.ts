import express, { Request, Response } from "express";
import { T } from "../libs/types/common"
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberService from "../models/Member.service";
import Errors from "../libs/Errors";

const memberService = new MemberService();

const memberController: T = {};

memberController.signUp = async (req: Request, res: Response) => {
    try {
        const input: MemberInput = req.body;
        console.log("body:", req.body);
        const result: Member = await memberService.signUp(input)
        //TODO: TOOKENS AUTHENCATION 

        res.json({ member: result });
    } catch (err) {
        console.log("ERROR on Sign up", err)
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)
    }
}

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log("Login Page");
        const input: LoginInput = req.body;
        const result = await memberService.PostLogin(input)
        //TODO: TOOKENS AUTHENCATION

        res.json({ member: result });
    } catch (err) {
        console.log("ERROR on Login", err);
    }
}



export default memberController;