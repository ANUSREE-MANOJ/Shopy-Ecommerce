import express from "express";

import {
  placeOrder,
  getUserOrders,
  getAllOrders,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/", placeOrder);

router.get(
  "/user/:userId",
  getUserOrders
);

router.get("/", getAllOrders);

export default router;