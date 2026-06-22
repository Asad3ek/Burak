export enum HttpCode {
    OK = 200,
    CREATED = 201,
    NOT_MODFIED = 304,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVICE_ERRROR = 500,
}

export enum Message {
    SOMETHING_WENT_WRONG = "Something Went Wrong",
    NOT_DATA_FOUND = "No Data is Found ",
    CREATE_FAILED = "Create is Failed",
    UPDATE_FAILED = "Update is Failed",

    BLOCKED_USER ="You have been blocked, contact with Restaurant",
    WRONG_PASSWORD = "Wrong Password, please try again!",
    USED_NICK_PHONE = "You are inserting already used Nick or Phone!",
    NO_MEMBER_NICK = "No member with that member nick",
    NOT_AUTHENCATED = "You are not Authencated. Please Login First!",
}


class Errors extends Error {
    public code: HttpCode;
    public message: Message;

    static standard = {
        code: HttpCode.INTERNAL_SERVICE_ERRROR,
        message: Message.SOMETHING_WENT_WRONG
    }

    constructor(statusCode: HttpCode, statusMessage: Message) {
        super();
        this.code = statusCode;
        this.message = statusMessage;

    }
}

export default Errors;