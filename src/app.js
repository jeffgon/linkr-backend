import express from "express"
import cors from "cors"
import routes from "./routes/routes.js";
import dotenv from "dotenv";

dotenv.config();

const server = express()
const port = process.env.PORT;

server.use(cors())
server.use(express.json())
server.use(routes);

server.listen(port, () => {
    console.log(`Server running in port: ${port}`)
});