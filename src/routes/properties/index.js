/** @format */

import express from "express";
import { Properties } from "../../db/models/index.js";

const propertiesRouter = express.Router();

propertiesRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const properties = await Properties.findAll();
      res.send(properties);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .post(async (req, res, next) => {
    console.log("params:", userId, cityId);
    try {
      console.log(req.body);
      const property = await Properties.create(req.body);
      res.send(property);
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

// propertiesRouter.route("/userId/cityId").post(async (req, res, next) => {
// const { userId, cityId } = req.params;
//   console.log("getParams", userId, cityId);
//   try {
//     const { userId, cityId, ...rest } = req.body;
//     const property = await Properties.create({
//       ...rest,
//       userId: userId,
//       cityId: cityId,
//     });
//     res.send(property);
//   } catch (e) {
//     console.log(e);
//     next(e);
//   }
// });

propertiesRouter
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      if (req.params.id.length !== 36)
        return next({ code: 400, msg: "invalid id" });
      const user = await Propert.findByPk(req.params.id);
      res.send(user);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })

  .put(async (req, res, next) => {
    console.log(req.params);
    try {
      if (req.params.id.length !== 36)
        return res.status(400).send("Invalid ID");
      if (req.body === {}) return res.status(400).send("Must Provide A Body");
      console.log("Req.Body", req.body);
      const editUser = await Propert.update(req.body, {
        where: { id: req.params.id },
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
      if (req.params.id.length !== 36)
        return res.status(400).send("Invalid ID");
      const deleteProperty = await Properties.destroy({
        where: { id: req.params.id },
      });
      if (deleteProperty > 0) {
        res.send("ok");
      } else {
        res.status(404).send("Not found");
      }
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

export default propertiesRouter;
