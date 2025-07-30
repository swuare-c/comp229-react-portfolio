import express from "express";
import projectCtrl from "../controllers/project.controller.js";
import { verifyToken, isAdmin } from "../../client/src/middleware/auth.js";

const router = express.Router();

router.route("/")
  .post(verifyToken, isAdmin, projectCtrl.create) // Admin-only create
  .get(projectCtrl.list); // Public list

router.route("/:projectId")
  .get(projectCtrl.read) // Public read
  .put(verifyToken, isAdmin, projectCtrl.update) // Admin-only update
  .delete(verifyToken, isAdmin, projectCtrl.remove); // Admin-only delete

router.param("projectId", projectCtrl.projectByID);

export default router;
