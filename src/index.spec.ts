import * as iterable from "./index"
import * as laws from "fp-ts-laws"
import * as fc from "fast-check"
import { string } from "fp-ts"

describe("Iterable", () => {
  it("should lift a value into an Iterable", () => {
    const value = "a"
    const result = iterable.of(value)

    for (const element of result) {
      expect(element).toStrictEqual(value)
    }
  })

  describe("laws", () => {
    it("eq", () => {
      laws.eq(iterable.getEq(string.Eq), fc.string())
    })
  })
})
