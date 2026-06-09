import Order from "../models/Order.js";

// Place Order
export const placeOrder = async (
  req,
  res
) => {
  try {
    const {
      user,
      orderItems,
      totalPrice,
    } = req.body;

    const order =
      await Order.create({
        user,
        orderItems,
        totalPrice,
      });

    res.status(201).json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Get User Orders
export const getUserOrders =
  async (req, res) => {
    try {

      const orders =
        await Order.find({
          user: req.params.userId,
        });

      res.json(orders);

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
  };

// Get All Orders
export const getAllOrders =
  async (req, res) => {
    try {

      const orders =
        await Order.find().populate(
          "user",
          "name email"
        );

      res.json(orders);

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
  };