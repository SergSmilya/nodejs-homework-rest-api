const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../models/contacts");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAllContacts = async (req, res) => {
  res.status(200).json(await listContacts());
};

const getContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await getContactById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(result);
};

const add = async (req, res) => {
  const result = await addContact(req.body);
  res.status(201).json(result);
};

const deleteContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await removeContact(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "contact deleted" });
};

const putContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContact: ctrlWrapper(getContact),
  add: ctrlWrapper(add),
  deleteContact: ctrlWrapper(deleteContact),
  putContact: ctrlWrapper(putContact),
};
