const request = require("supertest");
const app = require("../app");

describe("GET /health", () => {
  describe("GET request for checking server health", () => {
    test("should respond with 200 status code", async () => {
      const response = await request(app).get("/health");
      expect(response.statusCode).toBe(200);
    });
  });
});


