const express = require("express");

const {
  register,
  login,
  logout,
  getCurrent,
} = require("../../controllers/auth");
const { validateBody, validateToken } = require("../../middlewares");
const { userRegisterSchema, userLoginSchema } = require("../../models/user");

const router = express.Router();

router.post("/users/register", validateBody(userRegisterSchema), register);

router.post("/users/login", validateBody(userLoginSchema), login);

router.get("/users/current", validateToken, getCurrent);

router.post("/users/logout", validateToken, logout);

module.exports = router;
