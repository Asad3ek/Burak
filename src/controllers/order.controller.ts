import { ExtendedRequest } from "../libs/types/member";
import Errors, { HttpCode } from "../libs/Errors";
import { T } from "../libs/types/common";
import OrderService from "../models/order.service";
import { Response } from "express";

const orderService = new OrderService

const orderController: T = {};

/**SPA */
orderController.createOrder = async (req: ExtendedRequest, res: Response) => {
    try {
        console.log("createOrder");
        const orders = req.body;
        const result = await orderService.createOrder(req.member, req.body);

        res.status(HttpCode.CREATED).json(result);
    } catch (err) {
        console.log("ERROR, model: createOrder", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)
    }
}

export default orderController;