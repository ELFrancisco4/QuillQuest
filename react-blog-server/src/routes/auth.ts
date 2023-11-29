import { Router } from "express";
import * as helpers from "../config/helpers";

export const userRouter = Router();

userRouter.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    // check the database for a matching email and password
    let foundUser;
    try {
      foundUser = helpers.findUserByEmailAndPassword(email, password);
    } catch (err) {
      console.log("error in login route");
      return res.status(401).json({ message: err });
    }
    if (!foundUser) {
      return res.status(401).json({ message: "Invalid username or password" });
    } else {
      // create token to store on client side
      const token = helpers.createToken(foundUser._id, foundUser.authorName);
      // send back the jwt token
      return res
        .status(200)
        .cookie("token", token)
        .json({ success: true, message: "Login successful, redirecting..." });
    }
  }
});

userRouter.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    const { authorName, email, password } = req.body;
    const passwordHash = await helpers.hashPassword(password);
    await helpers.createUser(authorName, email, passwordHash);
    res
      .status(201)
      .send({ success: true, message: "User created successfully" });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong, try again later",
    });
    console.log(error);
  }
});

userRouter.post("/logout", (req, res) => {});

userRouter.post("/google-auth", (req, res) => {});
