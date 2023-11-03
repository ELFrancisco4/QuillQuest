import { Router } from "express";

export const userRouter = Router();

userRouter.post("/login", (req, res) => {});

userRouter.post("/register", (req, res) => {
    const {authorName, email, password} = req.body
});

userRouter.post("/logout", (req, res) => {});
