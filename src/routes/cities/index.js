/** @format */

import express from "express";
import { Cities } from "../../db/models/index.js";

const citiesRouter = express.Router();

citiesRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const user = await Cities.findAll();
      res.send(user);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      console.log(req.body);
      const user = await Cities.create(req.body);
      res.send(user);
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

export default citiesRouter;
