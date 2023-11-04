import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    authorName: {
      type: String,
      required: [true, "Provide author name"],
    },
    password: {
      type: String,
      required: [true, "Must provide a password"],
    },
    email: {
      type: String,
      required: [true, "Must provide an email"],
    },
    interests: {
      type: Array,
      default: [],
    },
    posts: {
      type: Array,
      default: [],
      ref: "posts",
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("users", UserSchema);
