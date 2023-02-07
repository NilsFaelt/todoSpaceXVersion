import express from "express";
import todoRouter from "./routes/todo";
import userRouter from "./routes/users";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
const PORT = process.env.PORT || 4003;
dotenv.config();
const corsOptions: cors.CorsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/", todoRouter);
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});
