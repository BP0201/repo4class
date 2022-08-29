const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test("works with correct format and existing time", () => {
    expect(timeWord("10:00").toEqual("ten o'clock am"))
  })
  test("fails with invalid time", () => {
    expect(timeWord("34:79").toEqual("Invalid time"))
  })
  test("fails with invalid input: type integer", () => {
    expect(timeWord(10).toEqual("Input must be a string!"))
  })
  test("fails with invalid input: type string", () => {
    expect(timeWord("hey").toEqual(`Invalid input! Use format "00:00"`))
  })
});