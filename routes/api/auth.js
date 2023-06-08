const express = require("express");

const {
  register,
  login,
  logout,
  getCurrent,
  updateSubscriptionUser,
  updateAvatar,
} = require("../../controllers/auth");
const { validateBody, validateToken, upload } = require("../../middlewares");
const {
  userRegisterSchema,
  userLoginSchema,
  userUpdateSubscrField,
} = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(userRegisterSchema), register);

router.post("/login", validateBody(userLoginSchema), login);

router.get("/current", validateToken, getCurrent);

router.post("/logout", validateToken, logout);

router.patch(
  "/subscription",
  validateToken,
  validateBody(userUpdateSubscrField),
  updateSubscriptionUser
);

router.patch("/avatars", validateToken, upload.single("avatar"), updateAvatar);

module.exports = router;
