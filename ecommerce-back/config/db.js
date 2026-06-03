import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("URI Loaded:", process.env.MONGO_URI ? "YES" : "NO");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("FULL ERROR:");
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;