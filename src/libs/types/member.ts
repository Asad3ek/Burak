import { MemberType, MemberStatus } from "../enums/member.enum";
import { ObjectId } from "mongoose";

export interface Member {
    _Id: ObjectId,
    memberNick: string,
    memberPhone: string,
    memberPassword?: string,
    memberPoint: number,
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

export interface LoginInput {
    memberNick: string,
    memberPassword: string,
}