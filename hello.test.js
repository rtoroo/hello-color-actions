const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Saludos desde el fin del mundo!!!");
  });
});
