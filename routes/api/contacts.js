const express = require("express");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models/contacts");
const HttpError = require("../../helpers");
const shema = require("../../shemas/contacts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json(await listContacts());
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;

  try {
    const result = await getContactById(contactId);

    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json(result);
  } catch (error) {
    const { status = 500, message = "Server error" } = error;
    res.status(status).json({ message });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = shema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    // ! зробити валідацію правильною (номер це намберб, імеіл це імеіл)
    // ! розібратися що саме записати в error.message згідно тех.завдання

    const result = await addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    const { status = 500, message = "Server error" } = error;
    res.status(status).json({ message });
  }
});

router.delete("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;

  try {
    const result = await removeContact(contactId);

    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    const { status = 500, message = "Server error" } = error;
    res.status(status).json({ message });
  }
});

router.put("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  // ? Якщо body немає, повертає json з ключем {"message": "missing fields"} і статусом 400
  try {
    const { error } = shema.validate(req.body);

    if (error) {
      throw HttpError(400, "missing fields");
    }

    // ? За результатом роботи функції повертає оновлений об'єкт контакту і статусом 200. В іншому випадку, повертає json з ключем "message": "Not found" і статусом 404
    const result = await updateContact(contactId, req.body);
    res.status(200).json(result);
  } catch (error) {
    const { status = 500, message = "Server error" } = error;
    res.status(status).json({ message });
  }
});

module.exports = router;

// ? Розділити по файлам, уникнути дублювання коду, рефакторинг
