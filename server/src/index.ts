/* ----------- Imports ------------ */
import express, { Request, Response } from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});

app.get("/", (_: Request, res: Response) => {
    res.send("Hello from server");
});
