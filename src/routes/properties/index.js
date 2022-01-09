/** @format */

import express from "express";
import { Properties } from "../../db/models/index.js";

const propertiesRouter = express.Router();

propertiesRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const user = await Properties.findAll();
      res.send(user);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      console.log(req.body);
      const user = await Properties.create(req.body);
      res.send(user);
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

export default propertiesRouter;
