import { MemberType, MemberStatus } from "../enums/member.enum";
import { ObjectId } from "mongoose";
import { Request } from "express";
import { Session } from "express-session";

export interface Member {
    _id: ObjectId,
    memberNick: string,
    memberPhone: string,
    memberPassword?: string,
    memberPoints: number,
    memberType: string,
    memberStatus: string,
    memberImage?: string,
    memberAddress?: string,
    memberDesc?: string,
    createdAt: Date,
    updateddAt: Date,
}


export interface MemberInput {
    memberNick: string,
    memberPhone: string,
    memberPassword: string,
    memberPoint: number,
    memberType?: string,
    memberStatus?: string,
    memberImage?: string,
    memberAddress?: string,
    memberDesc?: string,
}

export interface MemberUpdateInput {
    _Id: ObjectId,
    memberNick?: string,
    memberPhone?: string,
    memberPassword?: string,
    memberStatus?: string,
    memberImage?: string,
    memberAddress?: string,
    memberDesc?: string,
}

export interface LoginInput {
    memberNick: string,
    memberPassword: string,
}

export interface ExtendedRequest extends Request {
    member: Member;
    file: Express.Multer.File;
    files: Express.Multer.File[];
}

export interface AdminRequest extends Request {
    member: Member;
    session: Session & { member: Member };
    file: Express.Multer.File;
    files: Express.Multer.File[];
}