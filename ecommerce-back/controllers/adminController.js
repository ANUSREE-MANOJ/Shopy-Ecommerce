import User from "../models/User.js";
import Product from "../models/Product.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const totalProducts =
      await Product.countDocuments();

    // For now
    const totalOrders = 0;
    const totalSales = 0;

    res.json({
      totalUsers,
      totalProducts,
      totalOrders,
      totalSales,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};