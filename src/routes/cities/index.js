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
citiesRouter
  .route("/:cityId")
  .get(async (req, res, next) => {
    try {
      if (req.params.cityId.length !== 36)
        return next({ code: 400, msg: "invalid id" });
      const user = await Cities.findByPk(req.params.cityId);
      res.send(user);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .put(async (req, res, next) => {
    console.log(req.params);
    try {
      if (req.params.cityId.length !== 36)
        return res.status(400).send("Invalid ID");
      if (req.body === {}) return res.status(400).send("Must Provide A Body");
      console.log("Req.Body", req.body);
      const editUser = await Cities.update(req.body, {
        where: { id: req.params.cityId },
        returning: true,
      });
      res.status(201).send(editUser[1][0]);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
      if (req.params.cityId.length !== 36)
        return res.status(400).send("Invalid ID");
      const deleteUser = await Cities.destroy({
        where: { id: req.params.cityId },
      });
      if (deleteUser > 0) {
        res.send("ok");
      } else {
        res.status(404).send("Not found");
      }
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

export default citiesRouter;
