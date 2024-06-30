import { Request, Response } from "express";
import router from "./route";
import express from "express";
import cors from "cors";

const app = express();

// parser
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// application routes
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("No No No No");
});

export default app;
