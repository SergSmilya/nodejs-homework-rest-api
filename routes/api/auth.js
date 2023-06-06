const express = require("express");

const {
  register,
  login,
  logout,
  getCurrent,
  updateSubscriptionUser,
} = require("../../controllers/auth");
const { validateBody, validateToken } = require("../../middlewares");
const {
  userRegisterSchema,
  userLoginSchema,
  userUpdateSubscrField,
} = require("../../models/user");

const router = express.Router();

router.post("/users/register", validateBody(userRegisterSchema), register);

router.post("/users/login", validateBody(userLoginSchema), login);

router.get("/users/current", validateToken, getCurrent);

router.post("/users/logout", validateToken, logout);

router.patch(
  "/users/subscription",
  validateToken,
  validateBody(userUpdateSubscrField),
  updateSubscriptionUser
);

module.exports = router;
