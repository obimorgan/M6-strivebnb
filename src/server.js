/** @format */

import express from "express";
import cors from "cors";
// import { testDB } from "./db/connection";

const server = express();
const PORT = process.env.PORT;

server.use(express.json());
server.use(cors());

server.listen(PORT, () => {
  console.log("Server is running on:", PORT);
  // testDB();
});
