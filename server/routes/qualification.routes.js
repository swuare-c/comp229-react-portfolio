import express from "express";
import qualificationCtrl from "../controllers/qualification.controller.js";
import { verifyToken, isAdmin } from "../../client/src/middleware/auth.js";

const router = express.Router();

router.route("/")
  .post(verifyToken, isAdmin, qualificationCtrl.create) // Admin-only create
  .get(qualificationCtrl.list); // Public list

router.route("/:qualificationId")
  .get(qualificationCtrl.read)
  .put(verifyToken, isAdmin, qualificationCtrl.update) // Admin-only update
  .delete(verifyToken, isAdmin, qualificationCtrl.remove); // Admin-only delete

router.param("qualificationId", qualificationCtrl.qualificationByID);

export default router;
