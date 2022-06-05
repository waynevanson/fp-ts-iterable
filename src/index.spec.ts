import * as iterable from "./index"
import * as laws from "fp-ts-laws"
import * as fc from "fast-check"
import { readonlyArray, string } from "fp-ts"
import { pipe } from "fp-ts/lib/function"

describe("Iterable", () => {
  it("should lift a value into an Iterable", () => {
    const value = "a"
    const result = iterable.of(value)

    for (const element of result) {
      expect(element).toStrictEqual(value)
    }
  })

  describe("Functor", () => {
    test("bindTo", () => {
      const arbitraries = fc.tuple(
        fc.anything(),
        fc.string().filter((a) => a.length > 0)
      )
      fc.assert(
        fc.property(arbitraries, ([anything, property]) => {
          const result = pipe(
            iterable.of(anything),
            iterable.bindTo(property),
            iterable.ToReadonlyArray
          )
          expect(result).toStrictEqual(
            readonlyArray.of({ [property]: anything })
          )
        })
      )
    })

    test("flap", () => {
      fc.assert(
        fc.property(fc.integer(), (integer) => {
          const f = (a: number) => a.toString()
          const expected = f(integer)
          const result = pipe(
            iterable.of(f),
            iterable.flap(integer),
            iterable.ToReadonlyArray
          )
          expect(result).toStrictEqual(readonlyArray.of(expected))
        })
      )
    })
  })

  describe("Apply", () => {
    test("apFirst", () => {
      fc.assert(
        fc.property(fc.integer(), fc.string(), (integer, string) => {
          const fa = iterable.of(integer)
          const fb = iterable.of(string)

          const expected = iterable.ToReadonlyArray(fa)

          const result = pipe(
            fa,
            iterable.apFirst(fb),
            iterable.ToReadonlyArray
          )

          expect(result).toStrictEqual(expected)
        })
      )
    })

    test("apSecond", () => {
      fc.assert(
        fc.property(fc.integer(), fc.string(), (integer, string) => {
          const fa = iterable.of(integer)
          const fb = iterable.of(string)

          const expected = iterable.ToReadonlyArray(fb)

          const result = pipe(
            fa,
            iterable.apSecond(fb),
            iterable.ToReadonlyArray
          )

          expect(result).toStrictEqual(expected)
        })
      )
    })

    test("apS", () => {
      fc.assert(
        fc.property(
          fc.integer(),
          fc.string().filter((a) => a.length > 0),
          (integer, property) => {
            const result = pipe(
              iterable.of({}),
              iterable.apS(property, iterable.of(integer)),
              iterable.ToReadonlyArray
            )

            expect(result).toStrictEqual(
              readonlyArray.of({ [property]: integer })
            )
          }
        )
      )
    })
  })

  describe("NaturalTransformations", () => {
    it("ToReadonlyArray", () => {
      fc.assert(
        fc.property(fc.anything(), (anything) => {
          const inputs = iterable.of(anything)
          const result = iterable.ToReadonlyArray(inputs)
          expect(result).toStrictEqual(readonlyArray.of(anything))
        })
      )
    })

    it("FromReadonlyArray", () => {
      fc.assert(
        fc.property(fc.anything(), (anything) => {
          const inputs = readonlyArray.of(anything)
          const result = iterable.ToReadonlyArray(
            iterable.FromReadonlyArray(inputs)
          )
          expect(result).toStrictEqual(readonlyArray.of(anything))
        })
      )
    })
  })

  describe("laws", () => {
    it("Eq", () => {
      laws.eq(iterable.getEq(string.Eq), fc.string())
    })

    it("Functor", () => {
      laws.functor(iterable.Functor)(
        (arbitrary) => arbitrary.map(iterable.of),
        iterable.getEq
      )
    })

    it("Apply", () => {
      laws.apply(iterable.Apply)(
        (arbitrary) => arbitrary.map(iterable.of),
        iterable.getEq
      )
    })

    it("Applicative", () => {
      laws.applicative(iterable.Applicative)(
        (arbitrary) => arbitrary.map(iterable.of),
        iterable.getEq
      )
    })

    it("Chain", () => {
      laws.monad(iterable.Monad)(iterable.getEq)
    })
  })
})
