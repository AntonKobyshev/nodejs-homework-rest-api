const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contactsController");
const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contact");

router.get("/", ctrl.listContacts);

router.get("/:id", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.contactsSchema), ctrl.addContact);

router.delete("/:id", isValidId, ctrl.removeContact);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.contactsSchema),
  ctrl.updateContact
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
