import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middleware/error.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmetRouter.js";

const app = express();

// Hardcoded URLs for frontend and backend
const FRONTEND_URL = "https://hospital-management-system-frontend-vbmr.onrender.com";
const DASHBOARD_URL = "https://hospital-management-system-dashboard-e8na.onrender.com"; 

app.use(
  cors({
    origin: [FRONTEND_URL, DASHBOARD_URL],
    method: ["GET", "POST", "DELETE", "PUT", "Origin"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

dbConnection();

app.use(errorMiddleware);

export default app;
