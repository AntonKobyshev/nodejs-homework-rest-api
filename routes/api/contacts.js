const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contactsController");
const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas/contactsSchema");

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById)

router.post("/", validateBody(schemas.contactsSchema), ctrl.addContact);

router.delete('/:contactId', ctrl.removeContact)

router.put("/:contactId", validateBody(schemas.contactsSchema), ctrl.updateContact);

module.exports = router;
