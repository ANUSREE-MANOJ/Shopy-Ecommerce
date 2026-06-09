import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    orderItems: [
      {
        name: String,
        image: String,
        price: Number,
        quantity: Number,
      },
    ],

    totalPrice: {
      type: Number,
      required: true,
    },

    orderStatus: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model(
  "Order",
  orderSchema
);

export default Order;