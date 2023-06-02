// const jwt = require("jsonwebtoken");

// const { HttpError } = require("../helpers");

// const { SECRET_KEY } = process.env;

const validateToken = async (req, res, next) => {
  //   const { token } = req.body;
  console.log(req.authorization);

  //   if (!token) {
  //     throw HttpError(401, "Not authorized");
  //   }

  //   try {
  //     const { id } = jwt.verify(token, SECRET_KEY);
  //     console.log(id);
  //   } catch (error) {
  //     next(HttpError(401, "Not authorized"));
  //   }

  next();
};

module.exports = validateToken;
