const express = require("express");

const { register, login } = require("../../controllers/auth");
const { validateBody } = require("../../middlewares");
const { userRegisterSchema, userLoginSchema } = require("../../models/user");

const router = express.Router();

router.post("/users/register", validateBody(userRegisterSchema), register);

router.post("/users/login", validateBody(userLoginSchema), login);

module.exports = router;
