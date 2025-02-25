import express from "express";
import { addProduct, listProducts ,removeProduct ,singleProducts } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post('/add', addProduct);
productRouter.post('/remove', removeProduct);
productRouter.post('/single', singleProducts);
productRouter.get('/list', listProducts);

export default productRouter;
