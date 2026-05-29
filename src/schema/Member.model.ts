import mongoose, { Schema } from "mongoose";
import { MemberType } from "../libs/enums/member.enum";
import { MemberStatus } from "../libs/enums/member.enum";

const memberSchema = new Schema({

    memberType: {
        type: String,
        enum: MemberType,
        default: MemberType.USER
    },

    memberStatus: {
        type: String,
        enum: MemberStatus,
        default: MemberStatus.ACTIVE
    },

    memberNick: {
        type: String,
        index: { unique: true, sparse: true },
        required: true
    },

    meberPhone: {
        type: String,
        index: { unique: true, sparse: true },
        required: true
    },

    memberPassword: {
        type: String,
        select: false,
        required: true
    },

    memberImage: {
        type: String,
    },

    memberPoint: {
        type: Number,
        default: 0,
        required: true
    },

    memberAddress: {
        type: String,
    },

    memberDesc: {
        type: String,
    },
},
    { timestamps: true }     //createdA, updatedAt
);

export default mongoose.model("MEMBER:", memberSchema);