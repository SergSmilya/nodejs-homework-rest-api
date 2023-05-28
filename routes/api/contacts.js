const express = require("express");

const {
  getAllContacts,
  getContact,
  add,
  deleteContact,
  putContact,
} = require("../../controllers/contacts");
const validateBody = require("../../middlewares");
const shema = require("../../shemas/contacts");

const router = express.Router();

router.get("/", getAllContacts);

router.get("/:contactId", getContact);

router.post("/", validateBody(shema), add);

router.delete("/:contactId", deleteContact);

router.put("/:contactId", validateBody(shema), putContact);

module.exports = router;
