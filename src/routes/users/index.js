/** @format */

import express from "express";
import { Users } from "../../db/models/index.js";

const userRouter = express.Router();

userRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const user = await Users.findAll();
      res.send(user);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      console.log(req.body);
      const user = await Users.create(req.body);
      res.send(user);
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

export default userRouter;
