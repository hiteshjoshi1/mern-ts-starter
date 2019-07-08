import request from "supertest";
import app from "../src/app";

describe("GET /users", () => {
    it("should return 200 OK", () => {
        return request(app)
            .get("/users")
            .expect(200);
    });
});

describe("GET /users/test", () => {
    it("should return 200 OK", () => {
        return request(app)
            .get("/users/test")
            .expect(200);
    });
});

describe("GET /", () => {
    it("should return 404 OK", () => {
        return request(app)
            .get("/")
            .expect(404);
    });
});

// describe("POST /contact", () => {
//     it("should return false from assert when no message is found", (done) => {
//         request(app).post("/contact")
//             .field("name", "John Doe")
//             .field("email", "john@me.com")
//             .end(function (err, res) {
//                 expect(res.error).to.be.false;
//                 done();
//             })
//             .expect(302);

//     });
// });
