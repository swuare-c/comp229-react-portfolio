import express from "express";
import projectCtrl from "../controllers/project.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/")
  .post(authCtrl.requireSignin, projectCtrl.create)
  .get(projectCtrl.list);

router.route("/:projectId")
  .get(projectCtrl.read)
  .put(authCtrl.requireSignin, projectCtrl.update)
  .delete(authCtrl.requireSignin, projectCtrl.remove);

router.param("projectId", projectCtrl.projectByID);

export default router;
