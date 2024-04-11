import express, { urlencoded, json } from "express";

import cors from "cors";
import helmet from "helmet";

import mergePolylineRoute from "./routes/mergePolylineRoute.js";

const app = express();

// Middleware
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(helmet());

// Routes
app.use("/api", mergePolylineRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));