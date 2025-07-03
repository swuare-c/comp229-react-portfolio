import express from "express";
import projectCtrl from "../controllers/project.controller.js";

const router = express.Router();

router.route("/")
  .post(projectCtrl.create)
  .get(projectCtrl.list);

router.route("/:projectId")
  .get(projectCtrl.read)
  .put(projectCtrl.update)
  .delete(projectCtrl.remove);

router.param("projectId", projectCtrl.projectByID);

export default router;
