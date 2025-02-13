import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { userRoute } from "./routes/user.route";

const app = express();
const port = 4000;
app.use(bodyParser.json());
app.use("/user", userRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hellow World");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
