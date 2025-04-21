import express from "express";
import { authenticateToken } from "../utils/common.js";
import {
  createOrders,
  getAllOrder,
  updateOrder,
  createOrderDetails,
  getAllOrderDetails,
  updateOrderDetails,
} from "../controllers/order.controller.js";

const orderRouter = express.Router();

//Create order
orderRouter.post('/create-order',authenticateToken,createOrders);

//Get order
orderRouter.get('/get-all-order',authenticateToken,getAllOrder);

//Update order
orderRouter.post('/update-order',authenticateToken,updateOrder);

//Create order details
orderRouter.post('/create-order-details',authenticateToken,createOrderDetails);

//Get order details
orderRouter.get('/get-all-order-details',authenticateToken,getAllOrderDetails);

//Update order details
orderRouter.post('/update-order-details',authenticateToken,updateOrderDetails);

export { orderRouter };
