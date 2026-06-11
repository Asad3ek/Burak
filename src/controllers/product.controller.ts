import express, { Request, Response } from "express"
import Errors from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/product.service";

const productService = new ProductService
const productController: T = {};
productController.getAllProducts = (req: Request, res: Response) => {
    try {
        console.log("getAllProducts");
        res.render("product");
    } catch (err) {
        console.log("ERROR on getAllProducts", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)
    }
}

productController.createNewProduct = (req: Request, res: Response) => {
    try {
        console.log("createNewProduct");
        res.send("DONE!")
    } catch (err) {
        console.log("ERROR on createNewProduct", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)
    }
}

productController.updateChosenProduct = (req: Request, res: Response) => {
    try {
        console.log("updateChosenProduct");

    } catch (err) {
        console.log("ERROR on updateChosenProduct", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)
    }
}




export default productController;