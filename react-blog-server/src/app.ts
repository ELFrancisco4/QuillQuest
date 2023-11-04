import express from "express";
import { connectToDb } from "./config/db";
import { userRouter } from "./routes/user";
import cors from "cors";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/auth", userRouter);
app.use(cors());

app.listen(port, async () => {
  console.log(`Express is listening at http://localhost:${port}`);
  await connectToDb();
});
