const { words } = require("./curry");

test("Ex:1 split", () => {
  expect(
    words("Jingle bells Batman smells")).toEqual([
      "Jingle",
      "bells",
      "Batman",
      "smells",
    ]);
  
});
