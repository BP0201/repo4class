const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("it inserts a comma on 1000", () => {
    expect(addCommas(1000)).toEqual("1,000")
  })
  test("it inserts 2 commas on 1M", () => {
    expect(addCommas(1000000)).toEqual("1,000,000")
  })
  test("it inserts a comma on -1000", () => {
    expect(addCommas(-1000)).toEqual("-1,000")
  })
  test("it inserts a comma on 1000.124", () => {
    expect(addCommas(1000.124)).toEqual("1,000.124")
  })
  test("it does not insert a comma on nums with less than 3 digits", () => {
    expect(addCommas(100)).toEqual("100")
    expect(addCommas(10)).toEqual("10")
    expect(addCommas(-1)).toEqual("-1")
  })
});
