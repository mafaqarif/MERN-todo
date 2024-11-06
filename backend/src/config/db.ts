import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Mongo DB connection error :", error);
    process.exit(1);
  }
};
export default connectDB;