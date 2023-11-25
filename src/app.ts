import express, { Application } from "express";
import cors from "cors";
import { usersRoutes } from "./routes/users.routes";

const app: Application = express();

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173", 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use("/api/users", usersRoutes);
// app.use("/api/users", usersRoutes);

export default app;