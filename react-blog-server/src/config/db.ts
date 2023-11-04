import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectToDb = () => {
  mongoose.set("strictQuery", false);
  return mongoose
    .connect(process.env.MONGO_URI, {
      bufferCommands: false,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
