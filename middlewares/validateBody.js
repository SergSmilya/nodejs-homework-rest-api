const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  return (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      throw HttpError(400, `missing fields`);
    }

    const { error } = schema.validate(req.body);
    if (error) {
      next(
        HttpError(
          400,
          `missing required ${error.details[0].context.label} field`
        )
      );
    }
    next();
  };
};

module.exports = validateBody;
