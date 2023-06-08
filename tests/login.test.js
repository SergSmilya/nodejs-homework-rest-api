// ! відповідь повина мати статус-код 200
// ! у відповіді повинен повертатися токен
// ! у відповіді повинен повертатися об'єкт user з 2 полями email и subscription з типом даних String

const login = require("../controllers/auth");

describe("ctrl - login", () => {
  test("відповідь повина мати статус-код 200", async () => {
    const result = await login(req, res);
    expect(result).toBe({ status: 200 });
  });
});
