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

    WRONG_PASSWORD = "Wrong Password, please try again!",
    USED_PHONE = "You are inserting already used Nick or Phone!",
    NO_MEMBER_NICK = "No member with that member nick",
}

class Errors extends Error {
    public code: HttpCode;
    public message: Message;

    constructor(statusCode: HttpCode, statusMessage: Message) {
        super();
        this.code = statusCode;
        this.message = statusMessage;
    }
}

export default Errors;