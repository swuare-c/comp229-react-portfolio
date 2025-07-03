import express from "express";
import contactCtrl from "../controllers/contact.controller.js";

const router = express.Router();

router.route("/")
  .post(contactCtrl.create)
  .get(contactCtrl.list);

router.route("/:contactId")
  .get(contactCtrl.read)
  .put(contactCtrl.update)
  .delete(contactCtrl.remove);

router.param("contactId", contactCtrl.contactByID);

export default router;
