const express = require("express");

const {
  getAllContacts,
  getContact,
  add,
  deleteContact,
  putContact,
  updateStatusContact,
} = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");
const { schema, updateFavoriteFieldSchema } = require("../../models/contact");

const router = express.Router();

router.get("/", getAllContacts);

router.get("/:contactId", isValidId, getContact);

router.post("/", validateBody(schema), add);

router.delete("/:contactId", isValidId, deleteContact);

router.put("/:contactId", isValidId, validateBody(schema), putContact);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateFavoriteFieldSchema, "missing field favorite"),
  updateStatusContact
);

module.exports = router;
