import { UserModel } from "../models/user";
import * as argon2 from "argon2";
import * as jwt from "jsonwebtoken";

export const createUser = async (
  authorName: string,
  email: string,
  password: string
) => {
  const newUser = new UserModel({
    authorName: authorName,
    email: email,
    password: password,
  });
  await newUser.save();
};

export const hashPassword = async (password: string) => {
  const hash = argon2.hash(password);
  return hash;
};

export const comparePasswords = async (
  password: string,
  name: string
): Promise<boolean | null> => {
  try {
    const query = await UserModel.findOne({ name })
      .select({ password: 1 })
      .exec();
    if (query) {
      const result = await argon2.verify(query.password, password);
      return result;
    }
  } catch (err) {
    console.error;
  }
};

export const createToken = async (userId, authorName) => {
  const secretKey = "your_secret_key"; // Replace with your secret key
  const token = await jwt.sign(
    { id: userId, username: authorName },
    secretKey,
    {
      expiresIn: "1h",
    }
  );
  return token;
};

export const findUserByEmailAndPassword = async (email, password) => {
  try {
    const user = await UserModel.findOne({ email: email, password: password });
    return user;
  } catch (error) {
    console.error("Error finding user:", error);
    throw error;
  }
};
