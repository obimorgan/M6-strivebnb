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
userRouter
  .route("/:userId")
  .get(async (req, res, next) => {
    try {
      if (req.params.userId.length !== 36)
        return next({ code: 400, msg: "invalid id" });
      const user = await Users.findByPk(req.params.userId);
      res.send(user);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .put(async (req, res, next) => {
    console.log(req.params);
    try {
      if (req.params.userId.length !== 36)
        return res.status(400).send("Invalid ID");
      if (req.body === {}) return res.status(400).send("Must Provide A Body");
      console.log("Req.Body", req.body);
      const editUser = await Users.update(req.body, {
        where: { id: req.params.userId },
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
      if (req.params.userId.length !== 36)
        return res.status(400).send("Invalid ID");
      const deleteUser = await Users.destroy({
        where: { id: req.params.userId },
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

export default userRouter;
