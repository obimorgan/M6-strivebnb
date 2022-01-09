/** @format */

import express from "express";
import cors from "cors";
// import { testDB } from "./db/connection.js";

import usersRouter from "./routes/users/index.js";
import propertiesRouter from "./routes/properties/index.js";
import citiesRouter from "./routes/cities/index.js";

const server = express();
const PORT = process.env.PORT;

server.use(express.json());
server.use(cors());

server.use("/users", usersRouter);
server.use("/properties", propertiesRouter);
server.use("/cities", citiesRouter);

server.listen(PORT, () => {
  console.log("Server is running on:", PORT);
  // testDB();
});
