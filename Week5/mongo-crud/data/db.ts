import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.CONNECTION_STRING) {
      throw new Error(
        "CONNECTION_STRING is not defined in the environment variables",
      );
    }
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;
