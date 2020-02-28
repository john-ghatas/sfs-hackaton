import request from "supertest";
import { server, database } from "../app";

describe("Test the questions", () => {
  test("All questions have same amount of answers and tags", async done => {
    const counts = {};
    await request(server)
      .get("/questions?lang=NL")
      .then(response => {
        response.body.slice(1).forEach(question => {
          expect(question.answers.length).toBe(question.tags.length);
        });
      });
    done();
  });
});

describe("Test the results flow", () => {
  test("Submitting a fully matching tagCounts gives a perfect score", async done => {
    await request(server)
      .post("/result")
      .send({
        programme: "Software Engineering",
        tagCounts: {
          Python: 4,
          AI: 3,
          Science: 2,
          Visualization: 1
        }
      })
      .set("Content-Type", "application/json")
      .then(response => {
        request(server)
          .get(`/result?id=${response.body.uuid}&lang=NL`)
          .then(response => {
            expect(response.body.scores[0].name).toBe("Big Data");
            expect(response.body.scores[0].similarity).toBe(1);
            done();
          });
      });
  }, 30000);
});

afterAll(() => {
  database.end();
});
