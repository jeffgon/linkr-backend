import express from "express";
import cors from "cors";
import routers from "./routes/routes.js";
import dotenv from "dotenv";

const server = express();
const port = process.env.PORT || 5000;
dotenv.config();

server.use(cors());
server.use(express.json());
server.use(routers);

server.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
