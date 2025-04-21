import express from "express";
import { checkDatabaseConnection } from "./src/config/prisma.js";
import dotenv from "dotenv";
import {userRouter} from "./src/routes/users.route.js";
import { orderRouter } from "./src/routes/order.route.js";
import { clientRouter } from "./src/routes/client.route.js";
import cors from 'cors'
import { departmentRouter } from "./src/routes/department.route.js";
import { creativeRouter } from "./src/routes/creative.route.js";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { uploadRouter } from "./src/routes/upload.route.js";
import { campaignModeRouter } from "./src/routes/campaign-mode.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.get("/serverHealthCheck", async (req, res) => {
  try {
    res.status(200).send("Server is working Properly");
  } catch (error) {
    res.status(500).json({ message: "Health Issue" });
  }
});

app.get("/databaseHealthCheck", async (req, res) => {
  const dbStatus = await checkDatabaseConnection();
  res.json({
    status: dbStatus.connected ? "healthy" : "unhealthy",
    database: dbStatus,
  });
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//routes list
app.use('/user',userRouter);
app.use('/order',orderRouter);
app.use('/client',clientRouter);
app.use('/department',departmentRouter);
app.use('/creative',creativeRouter);
app.use('/campaign-mode',campaignModeRouter);
app.use('/',uploadRouter)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
