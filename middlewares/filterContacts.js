const { Contact } = require("../models/contact");

const { ctrlWrapper } = require("../helpers");

async function filterContacts(req, res, next) {
  const { _id: owner } = req.user;
  if (Object.keys(req.query).length === 0) {
    next();
    return;
  }
  const { favorite } = req.query;
  res.json(
    await Contact.find({
      owner,
      favorite,
    })
  );
}

module.exports = { filterContacts: ctrlWrapper(filterContacts) };
