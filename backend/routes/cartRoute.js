import express from "express";
import { addToCart, updateCart, getUserCart }  from "../controllers/cartController.js"

const cartRouter = express.Router();

cartRouter.get('/get', getUserCart);
cartRouter.post('/add', addToCart);
cartRouter.post('/update', updateCart);

export default cartRouter;
