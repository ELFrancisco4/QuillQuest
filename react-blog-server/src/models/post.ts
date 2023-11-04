import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Add a title"],
    },
    tag: {
      type: String,
      required: [true, "Select a tag"],
    },

    body: {
      type: String,
      required: [true, "Content cannot be empty"],
    },
    imageUrl: {
      type: String,
      required: [true, "Add a cover image for your blog post"],
    },
  },
  {
    timestamps: true,
  }
);

export const PostModel = mongoose.model("posts", PostSchema);
