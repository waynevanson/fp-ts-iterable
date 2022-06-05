import * as iterable from "./index"

describe("Iterable", () => {
  it("should lift a value into an Iterable", () => {
    const value = "a"
    const result = iterable.of(value)

    for (const element of result) {
      expect(element).toBe(value)
    }
  })
})
