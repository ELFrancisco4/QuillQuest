import express from "express";
import { connectToDb } from "./config/db";
import { userRouter } from "./routes/auth";
import cors from "cors";
const app = express();
const port = 3000;
app.use(
  cors({
    origin: "http://localhost:5000",
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", userRouter);

app.listen(port, async () => {
  console.log(`Express is listening at http://localhost:${port}`);
  await connectToDb();
});
