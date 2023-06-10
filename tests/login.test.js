// ! відповідь повина мати статус-код 200
// ! у відповіді повинен повертатися токен
// ! у відповіді повинен повертатися об'єкт user з 2 полями email и subscription з типом даних String

const { login } = require("../controllers/auth");
const request = require("supertest");
const app = require("../app");

describe("post /login", () => {
  beforeAll(() => app.listen(3000));

  test("відповідь повина мати статус-код 200", async () => {
    const result = await request(app).post("/login", login);
    expect(result.statusCode).toBe(200);
  });
});
